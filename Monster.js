class Monster{
    constructor(x,y,radius){
       var options={
           isStatic: true,
           restitution: 0.3,
           friction: 0.5,
           density: 1.2
       }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius
       this.image = loadImage("Monster-01.png");
       World.add(world,this.body);
   
   }

   
   display(){
   
       ellipse(this.body.position.x,this.body.position.y,20,20);
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 250, 250);
   
   }
   
   }