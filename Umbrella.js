class Umbrella {

    constructor(x,y,r) {


        var options={
            isStatic:true,
            density:0.2
            
		
        }
        this.x=x;
		this.y=y;
        this.r=r
        this.image=loadImage("images/Walking Frame/walking_1.png");
		this.body=Bodies.circle(this.x, this.y,this.r,options)
		World.add(world, this.body);


    }

    display() {
        var pos=this.body.position;

        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,0,0,this.r, this.r)
        pop()
       
    }


}