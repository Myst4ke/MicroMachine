let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled = false;

let camera = new Camera(-100, -1400, 2);
let map = new Map("./js/asset/map.png");
let camera_limit = 150;

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(map.img, camera.pos_x, camera.pos_y, map.img.naturalWidth * camera.zoom, map.img.naturalHeight * camera.zoom);
    draw_collision();
    player2.draw();
    player1.draw();
}

function update () {
    updatePos();
    camera.moved_by_player(player2, player1, camera_limit);
    check_collision(player1, player2);
    draw();

}
setInterval(update, 30);

