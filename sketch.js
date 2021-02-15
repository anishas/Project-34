const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b7 ,b8, b9;
var a1, a2, a3, a4, a5;
var c1, c2, c3, c4, c5, c6, c7;
var hero, line1;
var monster;
var PLAt;
var engine, world;


function preload() {
//preload the images here
bg = loadImage("GamingBackground.png")

}

function setup() {
  var canvas = createCanvas(3000, 650);

  engine = Engine.create();
  world = engine.world;

  b1 = new Block(330,235,50,50);
  b2 = new Block(330,285,50,50);
  b3 = new Block(330,335,50,50);
  b4 = new Block(330,385,50,50);
  b5 = new Block(330,435,50,50);
  b9 = new Block(330,485,50,50);
  b6 = new Block(330,535,50,50);
  b7 = new Block(330,585,50,50);

  a1 = new Block(430,385,50,50);
  a2 = new Block(430,435,50,50);
  a3 = new Block(430,485,50,50);
  a4 = new Block(430,535,50,50);
  a5 = new Block(430,585,50,50);

  c1 = new Block(530,285,50,50);
  c2 = new Block(530,335,50,50);
  c3 = new Block(530,385,50,50);
  c4 = new Block(530,435,50,50);
  c5 = new Block(530,485,50,50);
  c6 = new Block(530,535,50,50);
  c7 = new Block(530,585,50,50);

  hero = new Hero(150,200,20,20);

  monster = new Monster(900,200,20,20);

  line1 = new Sling(hero.body,{x:200, y:100});

  PLAt = new Platform(390,610,2000,10)

  // create sprites here

}

function draw() {
  background(bg);

  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b9.display();

  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();

  hero.display();

  monster.display();

  line1.display();

  PLAt.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  line1.fly();
}

