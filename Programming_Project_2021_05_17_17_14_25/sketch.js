function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background(10,140,320,5);

   fill(255,153,102);
  
  //legs
  rect(120,250,25,125);
  rect(250,250,25,125);
  fill(0);
  rect(120,350,25, 25);
  rect(250, 350, 25, 25);
  
  fill(255,153,102);
  
  //body
  ellipse(200, 200, 300, 250);
  
  // ears
  ellipse(165, 150, 25, 50);
  ellipse(235, 150, 25, 50);
  
  
  //face
  circle(200, 200, 125);
  
  let mouseEye = map(mouseX, 0, width, 0, 20, 1);
  
  // left eye
  fill(225);
  circle(175, 170, 25 + mouseEye);
  fill(0);
  circle(175, 170 ,10);
  
  if (mouseIsPressed)
    
  //right eye
  fill(225);
  circle(225, 170, 25);
  fill(0);
  circle(225, 170 ,10);
  
  //nose
  fill(255,153,102);
  ellipse(200, 210, 50,25);
  fill(0);
  circle(190, 210, 10);
  circle(210, 210, 10);
  
  //mouth
  noFill();
  arc(200, 225, 50, 50, PI * .25, PI *  .75); 
}