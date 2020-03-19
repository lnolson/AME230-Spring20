let xvalues = [];
let yvalues = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  
  let maxLength = 100;
  
  xvalues.push(mouseX);
  yvalues.push(mouseY);
  if (xvalues.length > maxLength) {
    xvalues.shift();
    yvalues.shift();
  }
  
  noStroke();
  for (let i = 0; i < xvalues.length; i++) {
    let alpha = i / xvalues.length;
    let w = 2.0 + 60.0 * alpha;
    fill(255.0, alpha * 255.0);
    ellipse(xvalues[i], yvalues[i], w, w);
  }
  
}