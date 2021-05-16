
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const Events=Matter.Events


var divisions =[];
var particles =null;
var plinko =[];

var score=0;
var count=0;
var gameState="start"
var divisionHeight=300;



function setup() {
	createCanvas(600, 700);

	

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	for(var k=15;k <=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}

	for(var j=75;j<=width;j=j+50){
		plinko.push(new Plinko(j,75,5));
	}

	for(var j=50; j<=width-10;j=j+50){
		plinko.push(new Plinko(j,175,5));
	}

	for(var j=75; j<=width;j=j+50){
		plinko.push(new Plinko(j,275,5));
	}

	for(var j=50;j<=width-10;j=j+50){
		plinko.push(new Plinko(j,375,5))
	}

	ground=new Ground(350,695,700,10)
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	stroke("white")
	strokeWeight(1)
	text("score:"+score,15,15)
	textSize(25)

	if(particles!==null){
		particles.display();
		if(particles.body.position.y>560){
			if(particles.body.position.x<=300){
				score=score+500;
				console.log("<=300"+particles.body.position.x)
				particles=null;
				if(count>=5){
					gameState="end"
				}
			}
			else if(particles.body.position.x<600 && particles.body.position.x>=301){
				score=score+100;
				console.log("<600 >=301"+particles.body.position.x)
				particles=null;
				if(count>=5){
					gameState="end"
				}
			}
			else if(particles.body.position.x<900 && particles.body.position.x>600){
				score=score+200;
				console.log("<=900 >600"+particles.body.position.x)
				particles=null;
				if(count>=5){
					gameState="end"
				}
			}

		}
	}


	for(var k=0; k< divisions.length;k++){
		divisions[k].display();
	}

	for(var j=0;j<plinko.length;j++){
		plinko[j].display();
	}
	ground.display();


	
}

function mousePressed(){
console.log("i am here")
	if(gameState!=="end"){
		count++
		particles=new Particle(mouseX,10,10,10)

	}
}
