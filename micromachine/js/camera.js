import { win_res, nb_rect } from "./main.js";
import { Rect } from "./collision.js";

export class Camera {
    constructor(pos_x, pos_y, zoom) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.zoom = zoom;
    }

    move_cam(move_x, move_y) {
        this.pos_x -= move_x;
        this.pos_y -= move_y;
    }

    moved_by_mouse(mouse, limite, acceleration, list_rect){ 
        let move_x, move_y;
        if (mouse.x < limite || mouse.y < limite || mouse.x >  win_res - limite || mouse.y > win_res - limite) {
                move_x = mouse.x - (win_res / 2);
                move_y = mouse.y - (win_res / 2);
                this.move_cam(move_x * acceleration, move_y * acceleration);
        }
        for (let i = 0; i < nb_rect; i++) {
           // move_rect()
        }

    }
}
