  
class Stone  {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x,y,this.r/2,options);
    }
    display(){
        var pos = this.body.position;
        push();
        rotate(this.body.angle)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
  }