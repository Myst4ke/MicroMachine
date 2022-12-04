import { Sprite, Car } from "./class.js";
import { Camera } from "./camera.js";
import { Rect } from "./collision.js";

let cnv = document.getElementById("myCanvas");
export let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled = false;

let tail_rout = 384;
export let win_res = cnv.height;
export let nb_rect = 1;

export let rect_collision = [new Rect(192, 0, 192+tail_rout, 750)];

let limite_camera = 20;
// TEST CAMERA
let mouse = {
    x: 400 ,
    y: cnv.height / 2
};

addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;  
});
export let mouse_rect = new Rect(mouse.x-(58/2), mouse.y-(83 / 2), mouse.x-(58/2) + 58, mouse.x-(58/2)+83);
/* ------------------------------------------------*/

let map = new Sprite("./sprite/map.png");
let camera = new Camera(-100, -1400, 2);
onload = function () {
    
    ctx.drawImage(map.image, camera.pos_x, camera.pos_y, map.image.naturalWidth * camera.zoom, map.image.naturalHeight * camera.zoom);

};

function update() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(map.image, camera.pos_x, camera.pos_y, map.image.naturalWidth * camera.zoom, map.image.naturalHeight * camera.zoom);
    ctx.fillStyle = "red";
    ctx.fillRect(mouse.x - (58/ 2), mouse.y - (83 / 2), 58, 83);
    camera.moved_by_mouse(mouse, limite_camera, 0.05);
    ctx.strokeStyle = "red";
    for (let i = 0; i < nb_rect; i++) {
        rect_collision[i].draw_rect();
    }
}

function update_all () {
    update();
    window.requestAnimationFrame(update_all);

}
window.requestAnimationFrame(update_all);

