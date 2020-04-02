let photo1;

// Info about the preload function: https://p5js.org/reference/#/p5/preload
function preload() {
  // Info about the loadImage function: https://p5js.org/reference/#/p5/loadImage
  photo1 = loadImage("buzz_aldrin_small.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  // image function: https://p5js.org/reference/#/p5/image
  image(photo1, 0, 0);
}