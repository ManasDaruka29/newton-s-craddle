
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var roof1;
function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	ball1 = new ball(200, 300)
	ball2 = new ball(300,400)
	ball3 = new ball(400,400)
	ball4 = new ball(500,400)
	ball5 = new ball(600,400)
	rope1 = new rope(ball1.body,{x:200,y:100})
	rope2 = new rope(ball2.body,{x:300,y:100})
	rope3 = new rope(ball3.body,{x:400,y:100})
	rope4 = new rope(ball4.body,{x:500,y:100})
	rope5 = new rope(ball5.body,{x:600,y:100})
	roof1 = new roof(380,100,500,20)
	
}
function draw() {
	background(46, 139, 87)
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof1.display();
//if(keyWentDown("LEFT_ARROW")){
//	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100});
//}

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-100});
	}
}

