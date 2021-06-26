class particle{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
    
      this.body = Bodies.circle(x,y,this.r,options);
      this.color = color(random(0,255), random(0,225), random(0,225));
      World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        circle(CENTER);
        fill("white");
      circle(pos.x, pos.y, this.w,this.h);
    }
}