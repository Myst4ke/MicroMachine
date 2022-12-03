let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

let playerSpeed = 3;
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
        if (elem.down === true) {
            if (elem.key === key) {
                elem.down = false;
                //console.log(elem);
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
        if (elem.down === false) {
            if (elem.key === key) {
                elem.down = true;
                //console.log(elem);
            }
        }
    });
    keyP1.forEach(testDown);
    keyP2.forEach(testDown);
}
addEventListener("keydown", keyDownTrigger);
addEventListener("keyup", keyUPTrigger);


let pos1 = new vec2(200, 200);
let rect1 = new rectangle(pos1, 40, 50);
rect1.draw();

let pos2 = new vec2(100, 100);
let rect2 = new rectangle(pos2, 40, 50);
rect2.draw();


function updatePos() {
    keyP1.forEach(elem => {
        if (elem.down === true ) {
            switch (elem.key) {
                case 'z':
                    rect1.posY -= playerSpeed;
                    break;
                case 'q':
                    rect1.posX -= playerSpeed;
                    break;
                case 's':
                    rect1.posY += playerSpeed;
                    break;
                case 'd':
                    rect1.posX += playerSpeed;
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
                    rect2.posY -= playerSpeed;
                    break;
                case 'ArrowLeft':
                    rect2.posX -= playerSpeed;
                    break;
                case 'ArrowDown':
                    rect2.posY += playerSpeed;
                    break;
                case 'ArrowRight':
                    rect2.posX += playerSpeed;
                    break;
                default:
                    break;
            }
        }
    });
}
function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    rect1.draw();
    rect2.draw();
}
function update() {
    updatePos();
    draw();

}
setInterval(update, 10);








