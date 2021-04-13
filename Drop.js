class drop{
    constructor(x,y,height,width){
    var options = {
    isStatic : true
    }
    this.body = Bodies.rectangle(x,y,height,width,options);
    World.add(world,this.body);
}        
display(){
    var pos = this.body.position;
    rectMode(center);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
}       
}