/*class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
		var pos =this.body.position;
			rectMode(CENTER)
			//strokeWeight(4);
			fill("white")
			rect(pos.x, pos.y, this.width, this.height);	
			
	}

}
*/ 

class Particle
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:0.4
		
			}
		//this.x=x;
		//this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.color=color(random(0,255), random(0,255), random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rotate(angle); 
			noStroke(); 
			fill(this.color) 
			ellipseMode(RADIUS); 
			ellipse(0,0,this.r,this.r);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill("white")

			pop()
			
	}

}

