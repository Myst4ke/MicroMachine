let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
let rotateRate = 1;
let maxSpeed = 3;
let acceleration = 0.02;
class vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let carSize = new vec2(40, 50);

function degToRadian(angle){
    return angle * Math.PI / 180;
}

class sprite{
    constructor(path){
        this.path = path;
    }
    draw(x, y, size){
        let img = new Image;
        img.src = this.path;
        ctx.drawImage(img, x, y, size.x, size.y);
    }
}
class player{
    constructor(pos, id){
        this.id = id;
        this.sprite = new sprite('js/asset/car'+ id +'.png');
        this.collider;
        this.topCorner = pos;
        this.origin = new vec2(pos.x + carSize.x/2, pos.y + carSize.y/2);
        this.direction = 0; // angle en °
        this.speed = 0;
    }
    draw(){
        ctx.save();
        ctx.translate(this.topCorner.x, this.topCorner.y);
        ctx.rotate(this.direction * Math.PI / 180);
        ctx.fillStyle = 'red';
        //ctx.fillRect(0, 0, cnv.width, cnv.height);

        this.sprite.draw(0-carSize.x/2 , 0-carSize.y/2, carSize);

        ctx.restore();
    }
    rotate(angle){
        if(angle > 0 && this.direction + angle > 360){
            this.direction = this.direction + angle - 360;
        }else if (angle < 0 && this.direction + angle < 0){
            this.direction = this.direction + angle | 0;
        }else{
            this.direction += angle;
        }
    }
    moveForward(){
        if(this.speed < maxSpeed){
            this.speed += acceleration;
        }else{
            this.speed = maxSpeed;
        }
        this.origin.x = (this.origin.x + this.speed * Math.cos(degToRadian(this.direction-90)));
        this.origin.y = (this.origin.y + this.speed * Math.sin(degToRadian(this.direction-90)));
        this.topCorner.y = this.origin.y - carSize.y/2;
        this.topCorner.x = this.origin.x - carSize.x/2;
    }
    moveBackward(){
        if(this.speed < maxSpeed){
            this.speed += acceleration/2;
        }else{
            this.speed = maxSpeed/2;
        }
        this.origin.x = (this.origin.x + this.speed * Math.sin(degToRadian(-(this.direction))));
        this.origin.y = (this.origin.y + this.speed * Math.cos(degToRadian(-(this.direction))));
        this.topCorner.y = this.origin.y - carSize.y/2;
        this.topCorner.x = this.origin.x - carSize.x/2;
    }
}

//Touches Joueur 1
let keyP1 = [{ key: 'z', down: false }, { key: 'q', down: false },
{ key: 's', down: false }, { key: 'd', down: false }];

//Touches Joueur 2
let keyP2 = [{ key: 'ArrowUp', down: false }, { key: 'ArrowLeft', down: false },
{ key: 'ArrowDown', down: false }, { key: 'ArrowRight', down: false }];

//Fonction qui retourne la touche relachée
function keyUPTrigger(elem) {
    let key = elem.key;
    const testUp = (elem => {
        if (elem.key === key) {
            if (elem.down === true) {
                elem.down = false;
            }
        }
    });
    keyP1.forEach(testUp);
    keyP2.forEach(testUp);
}

//Fonction qui retourne la touche appuyée 
function keyDownTrigger(elem) {
    let key = elem.key;
    const testDown = (elem => {
        if (elem.key === key) {
            if (elem.down === false) {
                elem.down = true;
            }
        }
    });
    keyP1.forEach(testDown);
    keyP2.forEach(testDown);
}
addEventListener("keydown", keyDownTrigger);
addEventListener("keyup", keyUPTrigger);

let pos1 = new vec2(200, 200);
let player1 = new player(pos1, '1');
player1.draw();

let pos2 = new vec2(100, 100);
let player2 = new player(pos2, '2');
player2.draw();

function updatePos() {
    keyP1.forEach(elem => {
        if (elem.down === true ) {
            switch (elem.key) {
                case 'z':
                    player1.moveForward();
                    break;
                case 'q':
                    if(keyP1[2].down === true){
                        player1.rotate(rotateRate);
                    }else{
                        player1.rotate(-rotateRate);
                    }
                    break;
                case 's':
                    player1.moveBackward();
                    break;
                case 'd':
                    if(keyP1[2].down === true){
                        player1.rotate(-rotateRate);
                    }else{
                        player1.rotate(rotateRate);
                    }
                    break;
                default:
                    break;
            }
        }
    });
    keyP2.forEach(elem => {
        if (elem.down === true) {
            switch (elem.key) {
                case 'ArrowUp':
                    player2.moveForward();
                    break;
                case 'ArrowLeft':
                    if(keyP2[2].down === true){
                        player2.rotate(rotateRate);
                    }else{
                        player2.rotate(-rotateRate);
                    }
                    break;
                case 'ArrowDown':
                    player2.moveBackward();
                    break;
                case 'ArrowRight':
                    if(keyP2[2].down === true){
                        player2.rotate(-rotateRate);
                    }else{
                        player2.rotate(rotateRate);
                    }
                    break;
                default:
                    break;
            }
        }
    });
    //player1.speed -= acceleration/2;
    //player2.speed -= acceleration/2;
}




