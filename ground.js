class Ground{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'density':1,
            'resititution':0.4
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        fill (120,60,0);
        stroke(120,60,0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}