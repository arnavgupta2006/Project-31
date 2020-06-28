var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var plinko1,ground;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
var plinko1 = new Plinko(this.x,this.y,10);
var ground = new Ground(400,390,800,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  plinko1.display();
  ground.display();
  for (var j =0;j<particles.length;j++){
    particles[j].display();
  }
  for (var k =0;k<particles.length;k++){
    divisions[j].display();
  }

}