var hr,mn,sc;
var scAngle,mnAngle,hrAngle;


function setup() {
  createCanvas(1000,1000);



}

function draw() {
  background(55,55,55)
  angleMode(DEGREES);
  hr = hour()+45;
  mn = minute()+45;
  sc = second()+45;

  hr1 = hour()%12;
  mn1 = minute();
  sc1 = second();

  translate(450,450);
  textSize(44);
  text(hr1+":"+mn1+":"+sc1,-100,320);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360)


  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100*2,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,95*2,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70*2,0);
  pop();

  push();
  noFill();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,450,450,-90,scAngle)
  pop();
  
  push();
  noFill();
  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,470,470,-90,mnAngle)
  pop();

  push();
  noFill();
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,490,490,-90,hrAngle)
  pop();
    


  drawSprites();
}