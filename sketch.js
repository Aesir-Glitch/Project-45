const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 'startingMenu';

var paperObject;
var ground;
var canvas;
var form;

function preload() {
  Imgdustbin = loadImage("dustbin.png");
}

function setup() {
  canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  game = new Game();

  //level1 parts
  ground = new Ground(600,600,1200,20);
  paperObject = new Paper(250,580,20,20);
  boxLeftBody = new Ground(740,560,10,50);
  boxBottomBody= new Ground(800,585,120,10);
  boxRightBody = new Ground(860,560,10,50);
  obstacle = new Ground(450,510,25,160);
  dustbin = createSprite(800,540,50,50);
  dustbin.addImage(Imgdustbin);
  Imgdustbin.resize(140,100);
  dustbin.visible = false;

  game.start();

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  console.log(gameState);

  if(gameState === 'level1') {
    canvas = createCanvas(1200,600);
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50);

    paperObject.display();
    ground.display();
    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    dustbin.visible = true;

    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
    }
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.body.position.x >= 740 && 
       paperObject.body.position.x <= 860 &&
       paperObject.body.position.y >= 540 &&
       paperObject.body.position.y <= 580) {
        gameState = 'level1Complete';
    }
  }

  if(gameState === 'level1Complete') {
    canvas = createCanvas(600,400);
    textSize(40);
    textFont("TimesNewRoman");
    stroke(0);
    text("Level 1 Complete",275,150);
    form.display();
  }

  if(gameState === 'level2') {
    canvas = createCanvas(1200,600);
    ground = new Ground(600,height,1200,20);
    paperObject = new Paper(250,580,20,20);
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50)

    boxleftSprite=createSprite(800,585,120,10);
    boxleftSprite.shapeColor=color(165,42,42);
 
    boxLeftBody = Bodies.rectangle(800,585,120,10,{isStatic:true});
    World.add(world,boxLeftBody);
 
    boxBase=createSprite(740,560,10,50);
    boxBase.shapeColor=color(165,42,42);
 
    boxBottomBody = Bodies.rectangle(740,560,10,50,{isStatic:true});
    World.add(world,boxBottomBody);
 
    boxRightSprite=createSprite(860,560,10,50);
    boxRightSprite.shapeColor=color(165,42,42);
 
    boxRightBody = Bodies.rectangle(860,560,10,50,{isStatic:true});
    World.add(world,boxRightBody);

    obstacle1 = Bodies.rectangle(350,550,10,100,{isStatic:true});
    World.add(world,obstacle);

    obstacle2 = Bodies.rectangle(450,525,10,150,{isStatic:true});
    World.add(world,obstacle);

    obstacle3 = Bodies.rectangle(550,550,10,100,{isStatic:true});
    World.add(world,obstacle);

    obstacle4 = Bodies.rectangle(350,525,75,10,{isStatic:true});
    World.add(world,obstacle);

    dustbin = createSprite(800,540,50,50);
    dustbin.addImage(Img);
    Img.resize(140,100);

    if (keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
    }
    if (keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.position.x >= 740 &&
      paperObject.position.x <= 860 &&
      paperObject.position.y >= 540 &&
      paperObject.position.y <= 580) {
      gameState = 'level2Complete';
   }
  }

  drawSprites();
}