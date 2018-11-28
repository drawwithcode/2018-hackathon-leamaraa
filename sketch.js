var mySong;
var inc = 0.01;
var scl = 10;
var cols;
var rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function preload() {
  mySong = loadSound("./assets/dark.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySong.play();
  mySong.setVolume(0.5);
  amp = new p5.Amplitude();
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

flowfield = new Array (cols * rows);

for (var i = 0; i<800 ; i++ ){
  particles[i] = new Particle();

}
  background(0);
}

function draw() {
    console.log(frameCount);

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++){
        var index = x + y * cols;

        var angle = noise(xoff, yoff, zoff) * TWO_PI *4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag (amp * 100);
        flowfield[index] = v;
        xoff += inc;
        stroke(0, 50);
        // push();
        // translate(x * scl, y * scl);
        // rotate(v.heading());
        // strokeWeight(2);
        // line(0, 0, scl, 0);
        // pop();
      }
      yoff += inc;
      zoff += 0.01;
  }

  for (var i=0;i < particles.length; i++){

particles[i].follow(flowfield);
particles[i].update();
particles[i].show();
particles[i].edges();

}
  // fr.html(floor(frameRate())) ;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
