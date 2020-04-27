// Simple Line Graph Demo
//
// This example creates a line graph of values (they are temperatures)
// that are stored in a simple array. (named data)

// data is the array with the values
let data = [72, 69, 67, 64, 63, 64, 67, 71, 76, 82, 87, 91];

// padding describes how much space is around the chart
let padding = 100;

// position and size of the chart
let graphX = 100;
let graphY = 100;
let graphWidth = 600;
let graphHeight = 400;


function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(220);
  
  rect(graphX, graphY, graphWidth, graphHeight);
  
  let previousX = 0;
  let previousY = 0;
  
  for (let i = 0; i < data.length; i++) {
    let tempValue = data[i];
    
    // Use map to scale the data to fit into the chart.
    let x = map(i, 0, data.length-1, graphX, graphX + graphWidth);
    let y = map(tempValue, 50, 100, graphY + graphHeight, graphY );
    
    ellipse(x,y,8,8);
    
    if (i > 0) {
      // This if statement is so that we don't draw a line segment to 
      // the very first data point - because we don't yet have a 
      // previous point to draw from.
      line(previousX,previousY,x,y);
    }
    
    previousX = x;
    previousY = y;
  }
  
  noLoop();
}