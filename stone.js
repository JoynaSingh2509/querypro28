class Stone 
{
    constructor(x,y){
        var options = {
            isStatic:false,
			restitution:0,
			friction:1,
			density:1.2 
        }
		this.body=Bodies.rectangle(x,y,20,20, options)
		this.width=20;
		this.height=20;
		this.image=loadImage("images/stone.png")
		
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		
		World.add(world, this.body);

	}
	display()
	{
		rectMode(CENTER)
		rect(120,500,this.width,this.height);
		image(this.image,0,0,this.width,this.height)
    }
}
