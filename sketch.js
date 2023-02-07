var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background("red");

   if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+3
   }

   if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-3
   }

  drawSprites()
}

