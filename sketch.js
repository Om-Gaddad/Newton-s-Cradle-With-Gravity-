
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bobObject1 = new Bob(200,450,50);
  bobObject2 = new Bob(300,450,50);
  bobObject3 = new Bob(400,450,50);
  bobObject4 = new Bob(500,450,50);
  bobObject5 = new Bob(600,450,50);
  roof = new Roof(400,100,600,30);
  rope1 = new Rope(bobObject1.body,roof.body,-200,1);
  rope2 = new Rope(bobObject2.body,roof.body,-100,1);
  rope3 = new Rope(bobObject3.body,roof.body,0,1);
  rope4 = new Rope(bobObject4.body,roof.body,100,1);
  rope5 = new Rope(bobObject5.body,roof.body,200,1);



  Engine.run(engine);
  

}


function draw() {
  background(200);

  Engine.update(engine);


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();


  text(mouseX + "," + mouseY, mouseX,mouseY);

  KeyPressed();


}

function KeyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:8,y:-8});
  }
}


