let photos = [];
let currentPhoto = 0;

function preload() {
  // Notice the images were named in a way to make it easy to write
  // a loop to load them all. They are numbered starting at 0. 
  // There are 10 images, with the numbering starting at 0, 
  // highest value is 9, therefore the loop test used is i < 10
  for (let i = 0; i < 10; i++) {
    let name = "image" + i + ".png";
    let photoObject = loadImage(name);
    photos.push(photoObject);
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // This x,y calculation will center the image in our view.
  let x = (width - photos[currentPhoto].width) / 2;
  let y = (height - photos[currentPhoto].height) / 2;
  
  image(photos[currentPhoto], x, y);
}

function mousePressed() {
  // If we go past the last frame, loop back to frame 0.
  currentPhoto = (currentPhoto + 1) % photos.length;
}