let nb_rect = 23;
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled = false;

let tail_rout = 384;
let win_res = 720;
class Rect {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1; this.y1 = y1;
        this.x2 = x2; this.y2 = y2;
        this.in_window_to_calcul();
    }
    in_window_to_calcul() {
        if(this.x1 > win_res || this.x2 < 0 || this.y1 > win_res || this.y2 < 0) {
                this.in_window = false;
           } else {
                this.in_window = true;
           }
    }
    move_rect(dx, dy) {
        this.x1 += dx; this.x2 += dx;
        this.y1 += dy; this.y2 += dy;
    }
    draw_rect() {
        ctx.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }
}
let rect_collision = [new Rect(192, -280, 192+tail_rout, 1050), new Rect(850, -937, 2048, -937+tail_rout),
                      new Rect(2111, -937, 2620, -937 + tail_rout), new Rect(2520, -850, 3550, -937+tail_rout),
                      new Rect(330, 786, 1535, 786+tail_rout), new Rect(1335, 873, 2290, 786+tail_rout),
                      new Rect(2090, 786, 2800,786+tail_rout), new Rect(2900, 100, 3113, 600),
                      new Rect(2815, -400, 2815+tail_rout, 100), new Rect(2815 , 600, 2815+tail_rout, 800),
                      new Rect(1950, -1150, 2200, -783), new Rect(1950, -707, 2200, -340), 
                      new Rect(3120,-937, 3500, -837), new Rect(350, -450, 850, -460+tail_rout),
                      new Rect(250,-350, 380, -200), new Rect(680, -870, 930, -100),
                      new Rect(920, -600, 1080, -200), new Rect(1740, -1110, 2000, -850),
                      new Rect(2000, -1110, 2350, -850), new Rect(1740, -700, 2000, -400),
                      new Rect(2800, 800, 3200, 1170), new Rect(3000, -450, 3500, -450+tail_rout),
                      new Rect(3290, -837, 3290+tail_rout, -120)];

// let rect_collision = [new Rect(192, -50, 192+tail_rout, 750), new Rect(1050, -937, 2048, -937+tail_rout)];
function draw_collision() {
    for (let i = 0; i < rect_collision.length; i++) {
        if (rect_collision[i].in_window === true) {
            ctx.strokeStyle = "blue";
            rect_collision[i].draw_rect();
        } else {
            ctx.strokeStyle = "red";
            rect_collision[i].draw_rect();
        }
    }
}

function in_box(player) {
    for (let i = 0; i < nb_rect; i++) {
        if (rect_collision[i].in_window === true) {
            if (player.collide(rect_collision[i]) === true) {
                return true;
            }
        }
    }
    return false;
}

function check_collision(player1, player2) {
    for (let i = 0; i < nb_rect; i++) {
        if (rect_collision[i].in_window === true) {
            if (in_box(player1)) {
                player1.maxSpeed = 20;
            } else {
                
                player1.maxSpeed = 10;
            }
            console.log(in_box(player2));
            console.log(player2.maxSpeed);
            if (in_box(player2)) {
                player2.maxSpeed = 20;
            } else {
                console.log("Et là?");
                player2.maxSpeed = 10;
            }
        }
        rect_collision[i].in_window_to_calcul();
    }

}


