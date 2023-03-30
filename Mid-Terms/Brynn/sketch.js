// CIRCLES STUFF
let angle1 = 0
let angle2 = 0
let radius1 = 60
let radius2 = 10
let speed1 = 0.01
let speed2 = 0.02
let colors = ["#33658A", "#6D9F71", "#DE8F6E", "#F6AE2D", "#F26419" ]
let colors2 = [ "#29dfd3", "#fd4073", "#ca40fd" ]
let randomColor = colors[Math.floor(Math.random() * colors.length)];
let randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];

//OTHER SQUARE STUFF
let direction = 1;
let speed3 = 4.5;
let x = 75
let y = 75

/**
let thisdirection = 1;
let speed4 = 4.5;
let x3 = 220
let y3 = 220
**/

//SETUP
function setup() {
  createCanvas(450, 450);
  background(0, 0, 0)
  noStroke();
}

//FUNCTIONS
function draw(){
  drawSquare1()
///  drawSquare2()
  drawIceCream(70, 70);  //top left
  drawIceCream(70, 220); //middle left
  drawIceCream(70, 370); //bottom left
  drawIceCream(220, 70); //top middle
  drawIceCream(370, 70); //top right
  drawIceCream(220, 370); // bottom middle
  drawIceCream(220, 220);// middle middle 
  drawIceCream(370, 370);//bottom right
  drawIceCream(370, 220);// middle right
  
  //SQUARE IN BACK SCRIPT
  
  ellipse(x, y, 20)
 // fill(randomColor)
//  square(70, 70, 305);
  
  function drawSquare1() {
  if (direction == 1) {
    x += speed3;
    if (x >= 370) {
      direction = 2;
    }
  } else if (direction == 2) {
    y += speed3;
    if (y >= 370) {  // goes down from top right
      direction = 3;
    }
  } else if (direction == 3) {
    x -= speed3;
    if (x <= 75) {  // goes up from bottom right
      direction = 4;
    }
  } else if (direction == 4) {
    y -= speed3;
    if (y <= 75) { //goes to 70, 70
      direction = 5;
    }
  }
}
}
/**
 function drawSquare2() {
  if (thisdirection == 1) {
    x3 += speed4;
    if (x3 >= 185) {
      thisdirection = 2;
    }
  } else if (thisdirection == 2) {
    y3 += speed4;
    if (y3 >= 185) {  // goes down from top right
      thisdirection = 3;
    }
  } else if (thisdirection == 3) {
    x3 -= speed4;
    if (x3 <= 37.5) {  // goes up from bottom right
      thisdirection = 4;
    }
  } else if (thisdirection == 4) {
    y3 -= speed4;
    if (y3 <= 37.5) { //goes to 70, 70
      thisdirection = 5;
    }
  }
}
**/
//FUNCTION THAT DRAWS THE CIRCLES
function drawIceCream(centerX, centerY) {
  
  const x1 = centerX + cos(angle1) * radius1;
  const y1 = centerY + sin(angle1) * radius1;
  
  fill(randomColor);
  
  circle(x1, y1, radius2 * 2);
  
  angle1 += speed1;
  
  const x2 = x1 + cos(angle2) + radius2;
  const y2 = y1 + sin(angle2) + radius2;
  
  fill(randomColor2);
  
  circle(x2, y2, radius2 * 2);
}

//MOUSE CLICK 
function mouseClicked() {
  angle1 *= -1;
  speed1 *= -1;
}
