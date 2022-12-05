
let gameState = 'menu';
let oldTime = Date.now();

function printTime(){
    ctx.font = '48px serif';
    let date = (Date.now() - oldTime)/1000;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(date.toString(), 350, 580);
}

function drawGameState(){

}