var car  , wall, speed , weight
function setup() {
  createCanvas(1600,400);
  car=createSprite(10,200,30,30)
  fill("orange")
  wall=createSprite(1200,200,60,height/2)
  wall.shapeColor="yellow"
  speed=0
  weight=0
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
  deformation=(0.5*weight*speed*speed)/22500
} 
function draw() {
  background(255,255,255); 
  
  car.depth=wall.depth
  car.depth=car.depth+1
  
isTouching(car,wall)
  if(car.isTouching(wall)){
    if(deformation<100){
      car.shapeColor="green"
      }
      if(deformation>100 && deformation<180){
        car.shapeColor="orange"
        }
    if(deformation>180){
        car.shapeColor="red"
    }
  }
  drawSprites();
}