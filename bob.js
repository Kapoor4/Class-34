class Bob{
    constructor(x,y,radius){
        var options={
            'frictionAir': 0.005,
            'density': 0.04
        }
 
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
 
        World.add(world, this.body);
 }
 display(){
     //angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     //rotate(angle);
     ellipseMode(CENTER);
     strokeWeight(2);
     stroke("black");
     fill("red");
     ellipse(0,0,this.radius);
     pop();
 }
}