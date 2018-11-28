// var mySong;
var inc = 0.1;
var scl = 10;
var cols;
var rows;

var zoff = 0;

var fr;

var particles = [];

function preload() {
  // mySong = loadSound("./assets/dark.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // mySong.play();
  // mySong.setVolume(0.5);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  for (var i = 0; i <100, i++) {
  particles[i] = new Particle();
 }

}

function draw() {
  background(255);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(random(angle));
      xoff += inc;

      stroke(0);

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      // line(0, 0, scl, 0);

      pop();
    }

    yoff += inc;

    zoff += 0.001;
  }

 for (var i; i < particles.length; i ++){
  particles[i].update();
  particles[i].show();
  particles[i].edges();
}
  fr.html(floor(frameRate()));
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
