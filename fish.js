class Fish {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img
    }

    move() {
        if (this.x + this.width <= 0) {
            this.x = width
            this.y = random(windowHeight)
        }

        this.x = this.x - this.speed
    }



    show() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}