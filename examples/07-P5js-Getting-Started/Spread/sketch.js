let list = [];
let infectionDistance = 20.0;
let probabilityOfInfection = 0.1;
let envWidth = 600.0;
let envHeight = 600.0;
let newInfections = 0;
let interval = 60;
let infections = [];

function setup() {
  createCanvas(600, 800);
  
  for (let i = 0; i < 300; i++) {
    let x = random(envWidth);
    let y = random(envHeight);
    let b = new Person(x, y);
    list.push(b);
  }
  list[0].isInfected = true;
  infections.push(1);
  
}

function draw() {
  background(128);
  if (frameCount % interval == 0) {
    infections.push(newInfections);
    newInfections = 0;
  }
  
  for (let i = 0; i < list.length; i++) {
    list[i].move();
    list[i].expose(list);
    list[i].render();
  }
  
  drawGraph();
}


function drawGraph() {
  let x = 0.0
  let y = 600.0;
  let w = 600.0;
  let h = 200.0;
  
  fill(80);
  rect(x, y, w, h);
  
  fill(255);
  beginShape();
  
  let nx = x;
  let ny = y + h;
  vertex(nx, ny);
  
  for (let i = 0; i < infections.length; i++) {
    nx = map(i, 0, 100, 0, w);
    ny = map(infections[i], 0, 50, y + h - 2.0, y);
    vertex(nx, ny);
  }
  
  vertex(nx, y + h);
  
  endShape(CLOSE);
}

class Person {
  
  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.radius = 5.0;
    let p = random(1.0);
    if (p < 0.1) {
      this.velocityX = random(-1.0, 1.0);
      this.velocityY = random(-1.0, 1.0);
    }
    else {
      this.velocityX = 0.0;
      this.velocityY = 0.0;
    }
    this.isInfected = false;
  }
  
  render() {
    stroke(0);
    if (this.isInfected == true) {
      fill(255, 0, 0);
    }
    else {
      fill(0,255, 0);
    }
    ellipse(this.positionX, this.positionY, this.radius * 2.0, this.radius * 2.0);
  }
  
  move() {
    if (this.isInfected == true) {
      this.velocityX = 0.0;
      this.velocityY = 0.0;
    }
    
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;

    if (this.positionX + this.radius > envWidth) {
      this.positionX = envWidth - this.radius;
      this.velocityX *= -1.0
    }
    else if (this.positionX - this.radius < 0.0) {
      this.positionX = this.radius;
      this.velocityX *= -1.0;
    }
    if (this.positionY + this.radius > envHeight) {
      this.positionY = envHeight - this.radius;
      this.velocityY *= -1.0;
    }
    else if (this.positionY - this.radius < 0.0) {
      this.positionY = this.radius;
      this.velocityY *= -1.0;
    }
  }
  
  expose(population) {
    if (this.isInfected == false) {
      return;
    }
    for (let i = 0; i < population.length; i++) {
      if (population[i].isInfected == false) {
        let d = dist(this.positionX, this.positionY, population[i].positionX, population[i].positionY);
        if (d > 0.01 && d < infectionDistance) {
          let p = random(1.0);
          if (p < probabilityOfInfection) {
            population[i].isInfected = true;
            newInfections++;
          }
        }
      }
    }
  }
  
}