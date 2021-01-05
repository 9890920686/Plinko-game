class Particles {

constructor(){

var options={'restitution':1,'isStatic':true}

var px=Math.round(random(20,480))


this.body=Bodies.circle(px,10,10)
this.color=color(random(0,255),random(0,255),random(0,255))

World.add(world,this.body)

}
display(){

    var posx=this.body.position.x
    var posy=this.body.position.y

    ellipse(posx,posy,10)

}

}