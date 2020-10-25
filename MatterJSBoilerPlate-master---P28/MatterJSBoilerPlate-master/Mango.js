class Mango{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1
        }
        this.x = x
        this.y = y
        this.radius = radius
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        
        
        World.add(world, this.body);
      }
      display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius*5,this.radius*5);
        pop();
      }
    }