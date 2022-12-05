
let menuImg = new Image();
menuImg.src = './js/asset/background.png';
let logo = new Image();
logo.src = './js/asset/micromachines.png';


class button {
    constructor(x, y, path) {
        this.x = x;
        this.y = y;
        this.sprite = new sprite(path);
    }
    draw(){
        this.sprite.draw(this.x, this.y, buttonSize);
    }
    isClicked(x, y) {
        if (x > this.x && x < this.x + buttonSize.x &&
            y > this.y && y < this.y + buttonSize.y) {
            return true;
        }
        return false;
    }
}
let buttonSize = new vec2(192, 78);
let soloButton = new button((cnv.width-buttonSize.x)/2, 300,'./js/asset/solo.png');
let duoButton = new button((cnv.width-buttonSize.x)/2, 400,'./js/asset/duo.png');
let buttons = [soloButton, duoButton]

//Affichage du menu et des boutons
function drawMenu() {
    ctx.drawImage(menuImg, 0, 0, cnv.width, cnv.height);
    ctx.drawImage(logo, (cnv.width-420)/2, 0, 420, 170);
    buttons.forEach(elem => elem.draw());
}