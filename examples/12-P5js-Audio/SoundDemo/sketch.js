// b will hold an instance of a Bubble
let b;

// sound1 will be a p5.SoundFile object.
let sound1;

function preload() {
  soundFormats('wav', 'mp3');
  sound1 = loadSound("guitarloop.wav");
}

function setup() {
  createCanvas(400, 400);
  
  // Create an instance of a Bubble object.
  b = new Bubble(sound1);
  
  sound1.setVolume(0.1);
  sound1.onended(soundDidFinish);
}

function mousePressed() {
  b.play(mouseX,mouseY);
}

function draw() {
  background(220);
  b.render();
}

function soundDidFinish() {
  print("The sound is done playing.");
}

class Bubble {
  
  constructor(soundObject) {
    // The bubble is positioned at a random location.
    this.x = random(width);
    this.y = random(height);
    this.radius = 20.0;
    this.sound = soundObject;
  }
  
  render() {
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  
  play(px,py) {
    // if px,py is inside the bubble, then play the sound.
    let d = dist(this.x,this.y,px,py);
    if (d <= this.radius) {
      this.sound.play();
    }
  }
  
}