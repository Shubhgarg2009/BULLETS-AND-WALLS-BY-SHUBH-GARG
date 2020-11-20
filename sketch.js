
var wall, thickness;
var bullet,bullet2,wall2,wall3,bullet3,bullet4,bullet5,bullet6,wall4,wall5,wall6,bullet7,wall7,speed1, speed, weight;
var bullet8,bullet9,bullet10,bullet11,bullet12 ;
function setup() {
  createCanvas(windowWidth,windowHeight);

thickness=random(22, 83);
speed=random(22, 55);
speed1=random(-22, -55);
weight=random(30, 52);

 bullet=createSprite(50, 60, 50, 10);
bullet.velocityX = speed;
bullet.shapeColor="white";

wall=createSprite(1300, 60, 20, 100);
wall.shapeColor=("white");

bullet2=createSprite(50, 160, 50, 10);
bullet2.velocityX = speed;
bullet2.shapeColor="white";

wall2=createSprite(1300, 160, 20, 100);
wall2.shapeColor=("white");

bullet3=createSprite(50, 260, 50, 10);
bullet3.velocityX = speed;
bullet3.shapeColor="white";

wall3=createSprite(1300, 260, 20, 100);
wall3.shapeColor=("white");

bullet4=createSprite(50, 360, 50, 10);
bullet4.velocityX = speed;
bullet4.shapeColor="white";

wall4=createSprite(1300, 360, 20, 100);
wall4.shapeColor=("white");

bullet5=createSprite(50, 460, 50, 10);
bullet5.velocityX = speed;
bullet5.shapeColor="white";

wall5=createSprite(1300, 460, 20, 100);
wall5.shapeColor=("white");

bullet6=createSprite(50, 560, 50, 10);
bullet6.velocityX = speed;
bullet6.shapeColor="white";

wall6=createSprite(1300, 560, 20, 100);
wall6.shapeColor=("white");

bullet7=createSprite(1250, 560, 50, 10);
bullet7.shapeColor="white";
bullet8=createSprite(1250, 460, 50, 10);
bullet8.shapeColor="white";
bullet9=createSprite(1250, 360, 50, 10);
bullet9.shapeColor="white";
bullet10=createSprite(1250, 260, 50, 10);
bullet10.shapeColor="white";
bullet11=createSprite(1250, 160, 50, 10);
bullet11.shapeColor="white";
bullet12=createSprite(1250, 60, 50, 10);
bullet12.shapeColor="white";


}

function draw() {
  background(0);  

  

    if(hasCollided(bullet, wall)){

      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall.shapeColor=color("red");
        bullet12.velocityX =speed1;
      }
    }
    if(hasCollided(bullet2, wall2)){

      bullet2.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall2.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall2.shapeColor=color("orange");
        bullet11.velocityX =speed1;
      }
    }
    if(hasCollided(bullet3, wall3)){

      bullet3.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall3.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall3.shapeColor=color("yellow");
        bullet10.velocityX =speed1;
      }
    }

    if(hasCollided(bullet4, wall4)){

      bullet4.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall4.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall4.shapeColor=color("green");
        bullet9.velocityX =speed1;
      }
    }
    if(hasCollided(bullet5, wall5)){

      bullet5.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall5.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall5.shapeColor=color("blue");
        bullet8.velocityX =speed1;
      }
    }
    if(hasCollided(bullet6, wall6)){

      bullet6.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall6.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall6.shapeColor=color("indigo");
        bullet7.velocityX =speed1;
      }
    }
    if(hasCollided(bullet6, wall6)){

      bullet6.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall6.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall6.shapeColor=color("indigo");

      }
    }
    
    
  drawSprites();
  
}

function hasCollided(Lbullet, Lwall){

bulletRightEdge=Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true;
}

return false;
}
