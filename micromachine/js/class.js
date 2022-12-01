class Element {
    constructor(sprite_src, pos_x, pos_y) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.sprite = new Image();
        this.sprite.src = sprite_src
    }
}

class Car extends Element {
    constructor (sprite_src, pos_x, pos_y){
        super(sprite_src, pos_x, pos_y) 
        this.width = 58;
        this.height = 83;
        this.rotation = 0;
    }
}

