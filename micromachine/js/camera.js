class Map{
    constructor(img_src) {
        let img = new Image();
        img.src = img_src;
        this.img = img;
    }
}
class Camera {
    constructor(pos_x, pos_y, zoom) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.zoom = zoom;
    }

    move_cam(move_x, move_y) {
        this.pos_x -= move_x;
        this.pos_y -= move_y;
    }

    moved_by_player(first, second, limit){ 
        let move_x, move_y;
        if (first.origin.x < limit && (first.direction < 360 && first.direction > 180) ||
            first.origin.y < limit && (first.direction < 90 || first.direction > 270) ||
            first.origin.x > win_res - limit && (first.direction < 180 && first.direction > 0) ||
            first.origin.y > win_res - limit && (first.direction > 90 && first.direction < 270)) {

            move_x = first.speed * Math.cos(degToRadian(first.direction-90));
            move_y = first.speed * Math.sin(degToRadian(first.direction-90));
            this.move_cam(move_x, move_y);

            first.origin.x -= move_x;
            first.origin.y -= move_y;
            second.origin.x -= move_x;
            second.origin.y -= move_y;

            for(let i = 0; i < 4; i++) {
                first.collider[i].x -= move_x;
                first.collider[i].y -= move_y;
                second.collider[i].x -= move_x;
                second.collider[i].y -= move_y;
            }

            for (let i = 0; i < rect_collision.length; i++) {
                rect_collision[i].move_rect(-move_x, -move_y);
            }
        }
    }
}



