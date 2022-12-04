import { win_res, ctx } from "./main.js";

export class Rect {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1; this.y1 = y1;
        this.x2 = x2; this.y2 = y2;
        this.in_window = this.in_window_to_calcul();
    }
    AABBcollide(otherRect) {
        if(this.x1 > otherRect.x2 || this.x2 < otherRect.x1 || 
            this.y1 > otherRect.y2 || this.y2 < otherRect.y1) 
            return false;
        return true;
    }
    in_window_to_calcul() {
        if(this.x1 < win_res + 100 && this.x1 > -100 || this.x2 < win_res + 100 && this.x2 > -100 ||
            this.y1 < win_res + 100 && this.y1 > -100 || this.y2 < win_res + 100 && this.y2 > -100)
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

