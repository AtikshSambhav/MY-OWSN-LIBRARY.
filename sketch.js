var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,200,50,50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  rect3=createSprite(200,200,50,50);
  rect3.shapeColor="green";
  rect3.debug=true;

  //Left
  rect4=createSprite(100,500,50,50);
  rect4.shapeColor="Yellow";
  rect4.debug=true;
  rect4.velocityX=3;
 

  //Right
  rect5=createSprite(1100,500,50,50);
  rect5.shapeColor="Blue";
  rect5.debug=true;
  rect5.velocityX=-3;
}

function draw() {
  background("pink");  
  // display distance between two objects.
  console.log(fixedRect.x-movingRect.x);

  //Making your sprite move with mouseX and mouseY
  movingRect.x=mouseX;
  movingRect.y=mouseY;

 

  //Function BounceOff calling
  bounceOff(rect4,rect5);


  //Function calling- passing arguments
 if(istouching(fixedRect,movingRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 } 
 else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
 }

 if(istouching(rect3,movingRect)){ 
  movingRect.shapeColor="red";
  rect3.shapeColor="red";
 } 
 else{
  rect3.shapeColor="green";
  movingRect.shapeColor="green";
 }
 
  drawSprites();
}

