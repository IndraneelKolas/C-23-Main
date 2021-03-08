class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution: 1,
        friction: 1,
       density:1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    
    rectMode(CENTER);
    rotate(this.body.angle)
    rect(pos.x, pos.y, this.width, this.height); 
    pop();
    translate(pos.x, pos.y);
  }
};
