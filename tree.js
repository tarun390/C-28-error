  
class Tree  {
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/tree.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
  };