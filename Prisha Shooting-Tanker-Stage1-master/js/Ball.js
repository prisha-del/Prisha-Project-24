class Ball {
  constructor(x,y) {
    var options = {
      frictionAir: 0,
      friction: 0,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 1.0
    }
    this.body = Bodies.circle(x, y,20,options);
    this.diameter = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    pos.x=mouseX;
    pos.y=mouseY;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    stroke(255);
    strokeWeight(3);
    circle(0,0,this.diameter);
    pop();
  }
};
