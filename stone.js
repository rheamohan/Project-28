class Stone{
    constructor(x,y,radius,height){
        var options={
            isStatic:false,
            resititution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("Sprites/stone.png");
        World.add(world,this.body);
    }

    

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}