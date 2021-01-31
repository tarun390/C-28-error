class Mango {
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.r = r;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.circle(x,y,this.r/2,options);
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
        rotate (this.body.angle);

        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop ();
    }
    
}