let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled = false;

let tail_rout = 384;
let win_res = 720;
class Rect {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1; this.y1 = y1;
        this.x2 = x2; this.y2 = y2;
        this.in_window = this.in_window_to_calcul();
    }
    in_window_to_calcul() {
        if(this.x1 > win_res || this.x2 < 0 ||
            this.y1 < win_res || this.y2 < 0)
            return true;
        return false;
    }
    move_rect(dx, dy) {
        this.x1 += dx; this.x2 += dx;
        this.y1 += dy; this.y2 += dy;
    }
    draw_rect() {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }
}
/* let rect_collision = [new Rect(192, -50, 192+tail_rout, 750), new Rect(1050, -937, 2048, -937+tail_rout),
                      new Rect(2111, -937, 2620, -937 + tail_rout), new Rect(2620, -850, 3550, -937+tail_rout),
                      new Rect(580, 786, 1535, 786+tail_rout), new Rect(1535, 873, 2090, 786+tail_rout),
                      new Rect(2090, 786, 2800,786+tail_rout), new Rect(2900, 100, 3113, 600),
                      new Rect(2815, -100, 2815+tail_rout, 100), new Rect(2815 , 600, 2815+tail_rout, 800),
                      new Rect(1950, -1150, 2200, -783), new Rect(1950, -707, 2200, -340), 
                      new Rect(3120,-937, 3500, -837)  ]; */

let rect_collision = [new Rect(192, -50, 192+tail_rout, 750), new Rect(1050, -937, 2048, -937+tail_rout)];

function draw_collision() {
    for (let i = 0; i < nb_rect; i++) {
        if (rect_collision[i].in_window === true) {
            ctx.strokeStyle = "blue";
            rect_collision[i].draw_rect();
        } else {
            ctx.strokeStyle = "red";
            rect_collision[i].draw_rect();
        }
    }
}

function check_collision(player1, player2) {
    rect_collision.forEach(rect => {
        if (rect.in_window === true) {

            if (player1.collide(rect) === false) {
                player1.speed = maxSpeed / 2;
                console.log("Sortie de terrain.");
            }
            if (player2.collide(rect) === false) {
                player2.speed = maxSpeed / 2;
                console.log("Sortie de terrain.");
            }
            player1.dead();
            player2.dead();
        }
    });
}


