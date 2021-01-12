class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            resititution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Sprites/stone.png");
        World.add(world,this.body);
    }

    

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}