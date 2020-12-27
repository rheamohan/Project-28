class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            resititution:0.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image = loadImage("Sprites/mango.png");
        this.image.scale = 0.2;
        World.add(world,this.image);
    }

    display(){
        var pos = this.body.position;
        push ();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
        pop ();
    }  
}