class Slingshot
{
  constructor(body1,point2)
  {
    var options = {
        bodyA : body1,
        pointB : point2,
        length : 10,
        stiffness : 0.03
    }
    this.slingshot = Constraint.create(options);

    this.sling1 = loadImage("sprites/sling1.png")
    this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")

    World.add(world,this.slingshot);

  }
  display()
  {
    image(this.sling1,230,80,40,140)
    image(this.sling2,205,65,40,100)
    if(this.slingshot.bodyA)
    {  var logpos = this.slingshot.bodyA.position;
    var birdpos = this.slingshot.pointB;
  
    push()
    
    if (logpos.x > 200)
    {
      strokeWeight(7);
      line(logpos.x -20,logpos.y,birdpos.x - 30,birdpos.y +10)
      line(logpos.x +20,logpos.y,birdpos.x + 25,birdpos.y +10)
      //image(this.sling3,logpos.x-30,logpos.y - 10,20,30)
    }else
    {
      strokeWeight(3);
      line(logpos.x -20,logpos.y,birdpos.x - 30,birdpos.y +10)
      line(logpos.x +20,logpos.y,birdpos.x + 25,birdpos.y +10)
      //image(this.sling3,logpos.x-30,logpos.y - 10,20,30)
    }
    pop()
    }
  }

  fly()
  {
    this.slingshot.bodyA = null;
  }

  attach(body1)
  {
    this.slingshot.bodyA = body1
  }
}
