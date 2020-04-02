// This example will flip thru a series of images in order to play an animation.

// The image objects will be stored in this array.
let images = [];

// Current is the index of the image that is currently being displayed.
let current = 0;

// When isPlaying is true, the animation is playing.
let isPlaying = false;

function preload() {
  // Notice the images were named in a way to make it easy to write
  // a loop to load them all. They are numbered starting at 0. 
  // There are 13 images, with the numbering starting at 0, 
  // highest value is 12, therefore the loop test used is i < 13
  for (let i = 0; i < 13; i++) {
    let name = "bugs_" + i + ".png";
    let photoObject = loadImage(name);
    images.push(photoObject);
  }
}

function setup() {
  createCanvas(480, 280);
}

function draw() {
  background(220);
  
  // This x,y calculation will center the image in our view.
  let x = (width - images[current].width) / 2;
  let y = (height - images[current].height) / 2;
  
  image(images[current], x, y);
  
  // The animation we are using should be played back at 10fps.
  // The view is being updated at 60fps.
  // Only move the frame forward if the frameCount is evenly divisible by 6.
  if (isPlaying == true && frameCount % 6 == 0) {
    // If we go past the last frame, loop back to frame 0.
    current = (current + 1) % images.length;
  }
  
}

function mousePressed() {
  // This line will invert the current (true/false) value of isPlaying.
  isPlaying = !isPlaying;
}