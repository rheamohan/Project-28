class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            resititution:0.4,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image = loadImage("Sprites/stone.png");
        World.add(world,this.image);
    }

    

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
        pop();
    }
}