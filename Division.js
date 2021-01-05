class Division {

constructor(x,y,w,h){

    var options={'friction':1,'isStatic':true}

this.body=Bodies.rectangle(x,y,w,h,options)

this.w=w
this.h=h



World.add(world,this.body)

}

display(){

var posx=this.body.position.x
var posy=this.body.position.y

rectMODE(CENTER)


rect(posx,posy,this.width,this.height)

}
}