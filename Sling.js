class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            'stiffness': 0.04,
            'length': 2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //World.add(world,this.sling);
        World.add(world,this.pointB);
    }

    /*attach(body){
        this.sling.bodyA = body;
    }*/

    fly(){
        this.sling.body.bodyA = null;
    }
    
    

    display(){

        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }

        //line(pointA.x, pointA.y, pointB.y, pointB.y);
        
        
        push();

        strokeWeight (4);

        line(pointA.x, pointA.y, pointB.x+20, pointB.y+510);
       
        pop();
    }

};