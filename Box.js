class Box
{
    constructor(xpos,ypos,width,height)
    {
        var box_options =
        {
            restitution: 0.3,
            friction: 1
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(xpos,ypos,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var angle = this.body.angle;
        var position = this.body.position;

        if(this.body.speed < 6)
        {
            push()
            translate(position.x,position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop()

        }else{
            World.remove(world,this.body)
            push()
           // tint(255,this.visibility);
            this.visibility = this.visibility - 5;
            pop()
             }
             console.log(this.body.speed);
    }
}            