class Plinko {

constructor(x,y){

    var options={'restitution':1,'isStatic':true}

this.body=Bodies.circle(x,y,10)

this.radius=20

}
display(){

var posx=this.body.position.x
var posy=this.body.position.y

ellipse(posx,posy,10,10)


}



}