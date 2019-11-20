class Shark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.scale = [1, 1]
    }

    followMouse() {
        var v;
        if (this.x >= mouseX && this.y >= mouseY) {
            v = createVector((this.x - mouseX), (this.y - mouseY));
        } else if (this.x >= mouseX && this.y < mouseY) {
            v = createVector((this.x - mouseX), (mouseY - this.y));
        } else if (this.x < mouseX && this.y >= mouseY) {
            v = createVector((mouseX - this.x), (this.y - mouseY));
        } else if (this.x < mouseX && this.y < mouseY) {
            v = createVector((mouseX - this.x), (mouseY - this.y));
        }
        var s = 100
        if (this.x >= mouseX && this.y >= mouseY) {
            this.x = this.x - (v.x / s);
            this.y = this.y - (v.y / s);
        } else if (this.x >= mouseX && this.y < mouseY) {
            this.x = this.x - (v.x / s);
            this.y = this.y + (v.y / s);
        } else if (this.x < mouseX && this.y >= mouseY) {
            this.x = this.x + (v.x / s);
            this.y = this.y - (v.y / s);
        } else if (this.x < mouseX && this.y < mouseY) {
            this.x = this.x + (v.x / s);
            this.y = this.y + (v.y / s);
        }
    }

    show() {
        // scale(this.scale)
        image(sharkImg, this.x, this.y, windowWidth / 5, windowWidth / 10);
    }
}