var bullet1 , damage,wall, bullet1weight,bullet1speed, wallthickness;




function setup() {
  createCanvas(1600,400);

  bullet1 =  createSprite(500, 200, 50, 50);
bullet1.shapeColor = "white";


wall = createSprite(900,200,10,200);
wall.shapeColor = "yellow";

bullet1weight = 42;
bullet1speed = 240;
wallthickness = 50
}

function draw() {

  background(0);  
 
 
if (keyDown("space")) {
   
  bullet1.velocityX = 5;
 }


 if (isTouching(bullet1,wall)) {


  damage = (0.5*bullet1weight*bullet1speed*bullet1speed)/(wallthickness*wallthickness*wallthickness);

  text(damage,500,200);
bullet1.velocityX = 0;

}
if (damage<10) {
  bullet1.shapeColor = "green";
  }
  
   if (damage>10) {
      bullet1.shapeColor = "red";
      }
  
   fill("blue");   
   
      text("BULLET SPEED = 240 KMPH",400,100);
      text("BULLET WEIGHT = 42 G",400,130);
         
   
  
  
    drawSprites();
  }
  
  
  function isTouching(object1,object2) {
    
     
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        &&  object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2)
  
        {
  
      return true;
    
    }
    
    else {
  
      return false;
    }
    
    }
  