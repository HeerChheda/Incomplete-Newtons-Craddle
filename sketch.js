const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
   
    roof1 = new Roof (600,150)

    ball1 = new Ball(300, 200);





    engine = Engine.create();
    world = engine.world;

}

function draw(){

    background(255,255,255);

  
    roof1.display();

    ball1.display();






    Engine.update(engine);
    
}



