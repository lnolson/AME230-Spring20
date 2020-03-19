function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128);
  
  let w = width / 2;
  let h = height / 2;
  
  noStroke();
  
  if (mouseX < w && mouseY < h) {
    // top, left quadrant
    fill(255, 0, 0);
    rect(0, 0, w, h);
  }
  else if (mouseX >= w && mouseY < h) {
    // top, right quadrant
    fill(0, 255, 0);
    rect(w, 0, w, h);
  }
  else if (mouseX < w && mouseY >= h) {
    // bottom, left quadrant
    fill(0, 0, 255);
    rect(0, h, w, h);
  }
  else {
    // bottom, right quadrant
    fill(255, 255, 0);
    rect(w, h, w, h);
  }
}