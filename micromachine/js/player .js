let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

let maxSpeed = 5;
let acceleration = 0.2;
/*Le joueur :
- Un rectangle de taille W x H et de position x y 
- Un point central de position x, y + W/2 + H/2 
- Une direction (un angle, 0 et 360 étant une barre verticale) entre 0 et 360
- Une vitesse en x et en y
- Une accélération */

//Fonction qui tourne un point autour d'un autre
function rotate_point(pointX, pointY, originX, originY, angle) {
    angle = angle * Math.PI / 180.0;
    return {
        x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
        y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
    };
}
 
class vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class rectangle{
    constructor(pos, w, h){
        this.posX = pos.x;
        this.posY = pos.y;
        this.width = w;
        this.height = h;
        this.origin = new vec2(this.posX+this.width/2, this.posY+this.height/2);
        this.points = [new vec2(this.posX, this.posY),
                       new vec2(this.posX+this.width, this.posY),
                       new vec2(this.posX, this.posY+this.height),
                       new vec2(this.posX+this.width, this.posY+this.height)]
    }
    draw(){
        //ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
    rotate(angle){

    }
}
class player{
    constructor(rect){
        this.rect = rect;
        this.pos = new vec2(rect.posX+rect.width/2, rect.posY+rect.height/2);
        this.direction = 0;
        this.speed = 1;
    }
    rotate(){}
    moveForward(){}
}

