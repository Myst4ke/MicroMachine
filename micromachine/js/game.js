
let startingTime = Date.now();
//
let camera = new Camera(-100, -1400, 2);
let map = new Map("./js/asset/map.png");
let camera_limit = 150;

function initDuoGame() {
    pos1 = new vec2(300, 300);
    player1 = new player(pos1, '1');
    player1.draw();

    pos2 = new vec2(420, 400);
    player2 = new player(pos2, '2');
    player2.draw();
}

function printTime() {
    ctx.font = '48px technology';
    let date = (Date.now() - (startingTime + 3000)) / 1000;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(date.toString() + 's', 310, 680);
}

function countDown() {
    let count = (Date.now() - startingTime) / 1000 | 0;
    ctx.font = '48px Radioland';
    if (count < 3) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(Math.abs(count - 3).toString(), 360, 300);
    } else {
        //lancement de la partie 
        printTime();
        updatePos();
        camera.moved_by_player(player2, player1, camera_limit);
        check_collision(player1, player2);
    }
}