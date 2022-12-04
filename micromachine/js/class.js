export class Sprite {
    constructor(img_src) {
        let img = new Image();
        img.src = img_src;
        this.image = img;
    }
}
class Element {
    constructor(pos_x, pos_y) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
    }
}

export class Car extends Element {
    constructor (pos_x, pos_y){
        super(pos_x, pos_y);
        this.width = 58;
        this.height = 83;
        this.rotation = 0;
    }
}


