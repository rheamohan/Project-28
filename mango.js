//MANGO CLASS
class Mango{
    constructor(x,y,radius,height){
        var options={
            isStatic:true,
            resititution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        //TO ADD IMG
        this.image = loadImage("Sprites/mango.png");
        this.image.scale = 0.2;
        //ADD THEM TO WORLD
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //PUSH AND POP
        push ();
        //TO ROTATE THE BODY 
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        //ADD IMAGE
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    }  
}