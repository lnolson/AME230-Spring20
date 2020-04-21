let photo;

function preload() {
  // Create an Image object from the jpg image file.
  photo = loadImage("cute_puppy.jpg");
}

function setup() {
  createCanvas(554, 400);
  
  // Prepare the image object pixels array. You must do this
  // if you want to access individual pixel information.
  photo.loadPixels();
}

function draw() {
  background(220);
  
  let x = 141;
  let y = 160;
  // calculate the index value for a pixel in the 
  // image object pixel array.
  let index = (y * photo.width + x) * 4;
  
  // get the color values from the pixels array.
  let r = photo.pixels[index];
  let g = photo.pixels[index+1];
  let b = photo.pixels[index+2];
  let a = photo.pixels[index+3];
  
  // create a color object from the individual color
  // component values, use it as fill color.
  let c = color(r,g,b,a);
  noStroke();
  fill(c);
  rect(0,0,width,height);
}