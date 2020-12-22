class ball{
    constructor(x,y){
        var options = {
            'restitution':1.0,
            'friction':0,
            'density':0.8,
            'isStatic':false
        } 
        this.body=Bodies.circle(x,y,50,options)
        World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0,50);
        pop();
    }
}