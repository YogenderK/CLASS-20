var canvas,fixedRect,movingRect;
var class20=1


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green";

 movingRect=createSprite(400,300,50,50);
 movingRect.shapeColor="red";
}

function draw() {
  background("lightblue");  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  text("touchtimes:"+class20,700,200)

   if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2 &&
     movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2  ){
     fixedRect.shapeColor="black"
     
      class20+=1
   } else {
     fixedRect.shapeColor="red";
     movingRect.shapeColor="green"
     
   }
  drawSprites();
}