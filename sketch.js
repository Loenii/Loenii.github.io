let x = 0;
let y = 0;

let miffyX = 0;
let miffyY = 0;

let gravity = 4
let ySpeed = 0

function setup() {
  createCanvas(350, 550);
  angleMode(DEGREES);
}

function draw() {
  background(0, 210, 200);
  print(mouseX, mouseY);

  //REMINDER TO MYSELF; makes loop
  // rectX = rectX +5
  // if (rectX >500)
  // rectX = -100
  // rect(rectX, 50,50,50)

  //grass
  noStroke();
  fill(0, 200, 0);
  rect(0, 270, 350, 550);

  //flowers
  fill(70, 140, 60);
  rect(x + 210, y + 410, 30, 20, 0, 80, 0, 80);
  rect(x + 242, y + 410, 30, 20, 80, 0, 80, 0);

  stroke(0, 75, 0);
  strokeWeight(4);
  noFill();
  curve(x + 304, y + 387, x + 248, y + 389, x + 242, y + 430, x + 249, y + 463);

  noStroke();
  fill(250, 190, 190);
  circle(x + 245, y + 388, 30);

  fill(70, 140, 60);
  rect(x + 43, y + 464, 30, 20, 0, 80, 0, 80);
  rect(x + 75, y + 464, 30, 20, 80, 0, 80, 0);

  stroke(0, 75, 0);
  strokeWeight(4);
  noFill();
  curve(x + 20, y + 457, x + 62, y + 440, x + 73, y + 483, x + 74, y + 483);

  noStroke();
  fill(250, 190, 190);
  circle(x + 65, y + 440, 30);

  //flag

  strokeWeight(1);
  stroke(0, 0, 150);
  fill(150);
  rect(x + 308, y + 202, 4, 97);
  fill(200, 0, 0);
  rect(x + 312, y + 202, 40, 10);
  fill(255);
  rect(x + 312, y + 212, 40, 10);
  fill(0, 0, 200);
  rect(x + 312, y + 222, 40, 10);

  if (keyIsPressed) {
    if (key == "ArrowRight") x = x - 5;

    if (x < -350) x = 350;
  }

  //step
push();
  translate(miffyX, miffyY);
  // translate(-200, 100);
  
  //step
  strokeJoin(ROUND);
  strokeWeight(1);
  stroke(0, 0, 150);
  fill(0, 0, 200);
  rect(109, 320, 115, 7);
  rect(226, 327, -7, -75);

  fill(255, 255, 0);
  circle(126, 330, 18);
  circle(205, 330, 18);

  noStroke();
  fill(255);

  //feet
  stroke(255);
  fill(255);
  rect(179, 304, 15);
  circle(195, 311, 15);
  //push();

  beginShape();
  vertex(122, 295);
  vertex(117, 307);
  vertex(138, 314);
  vertex(140, 300);
  endShape(CLOSE);
  circle(138, 306, 15);

  //hand
  fill(255);
  circle(220, 250, 15);

  //body
  noStroke();
  fill(255, 102, 0);

  beginShape();
  
  vertex(212, 302);
  bezierVertex(213, 304, 128, 309, 117, 289);
  bezierVertex(116, 281, 136, 246, 136, 246);
  vertex(212, 302);
  vertex(212, 261);
  vertex(222, 257);
  vertex(219, 242);
  vertex(208, 242);
  vertex(138.5, 248);
  endShape(CLOSE);

  //ears
  fill(255);
  strokeWeight(1.5);
  stroke(255);

  bezier(134, 195, 110, 144, 156, 69, 166, 181);
  bezier(208, 200, 228, 105, 180, 83, 176, 180);

  //nijntje face
  ellipse(170, 220, 90, 80);
  fill(0, 0, 200);

  //eyes
  stroke(0, 0, 150);
  ellipse(145, 230, 5, 10);
  ellipse(195, 230, 5, 10);

  //mouth
  line(165, 240, 175, 245);
  line(165, 245, 175, 240);
  
  pop();
  
    if (miffyY + 275 <= 300) {
      miffyY += gravity
  }
    miffyY += ySpeed
    ySpeed /= 1.5
  
}
    
function mousePressed(){
    if(miffyY + 275 >= 300)
      ySpeed =- 25
    }
