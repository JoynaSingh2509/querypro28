class Mango{
    constructor(x,y){
        var options = {
            isStatic:true,
			restitution:0,
			friction:1,
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)			
			ellipse(0,0,r,r);
			pop()
			
	}

}
