class Fish {
    constructor(fishType, x, y, img, minSpeed, maxSpeed) {
        this.x = x;
        this.y = y;
        this.scale = [1, 1]
        this.width = ''
        this.height = ''
        this.fishType = fishType
        this.img = img
        this.minSpeed = minSpeed
        this.maxSpeed = maxSpeed
        this.speed = random(this.minSpeed, this.maxSpeed)

    }

    move() {
        if (this.x + this.width <= 0) {
            this.x = width
            this.y = random(windowHeight)
            // this.speed = random(this.minMaxSpeed)

        }

        this.x = this.x - this.speed
    }



    show() {
        if (this.fishType == 'regular') {
            this.width = 50
            this.height = 20
        }
        if (this.fishType == 'large') {
            this.width = 150
            this.height = 50
        }
        if (this.fishType == 'poison') {
            this.width = 70
            this.height = 30
        }
        image(this.img, this.x, this.y, this.width, this.height);
    }
}