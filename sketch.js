const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var world,engine

var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(0);  
  drawSprites();

  divisions.display();
}