var mySong;
var mc3;
var mc5;

function preload(){
  
  mc3 = loadImage("assets/medievalcat3.jpg");
  mc5 = loadImage("assets/medievalcat5.jpg");
  mySong = loadSound("./assets/music.mp3");
  // put preload code here
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  tint(255,50);
  image(mc3,0, width, height);
  image(mc5,0,width, height);
  mySong.play();
}


function draw() {
  //tint(255,255);
  //image(mc2,0,0,windowWidth,windowHeight);

  tint(255,map(rotationY,0,-30,255,128));
  image(mc3,0,0,windowWidth,windowHeight);

  tint(255,map(rotationY,0,30,128,255));
  image(mc5,0,0,windowWidth,windowHeight);

}

// function windowResized() {
//   // resize canvas when switching into/from full screen
//   resizeCanvas(windowWidth, windowHeight);
// }
