var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,300);
  weight=random(400,1500);
 car= createSprite(50, 200, 50, 50);
 
 car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  this.wall.shapeColor="red";
}

function draw() {
  background(255);  
  createEdgeSprites();
   car.velocityX=speed;
   if (wall.x - car.x<wall.width/2 + car.width/2){
    car.velocityX=0;
    var deformation= 0.5*weight*speed/22500;
    if(deformation>180){
      this.car.shapeColor="black";
    }
    if(deformation<180 && deformation>100){
      this.car.shapeColor="green";
    }
    if( deformation<100){
      this.car.shapeColor="blue";
    }
      }
   
  drawSprites();
  }