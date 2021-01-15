//SLING CLASS
class Sling{
    constructor(bodyA,pointB){
        var options={
            //BODYA = STONE
            //POINTB = THE LINE
            bodyA: bodyA,
            pointB: pointB,
            //ABOUT THE SLING
            'stiffness': 0.004,
            'length': 10
        }
        this.pointB = pointB
        //CREATE THE BODY AS CONSTRAINT(TO CREATE LINE)
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        //MEANS IN THIS.SLING THE BODYA IS *NULL*
        //Null is a built-in constant that has a value of zero.
        this.sling.bodyA = null;
    }

    attach(body){
    //BODYA (which is the stone) IS THE BODY WHICH NEEDS TO ATTACH
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
};