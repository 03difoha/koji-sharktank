class regularFish extends Fish {
    constructor(x, y, img) {
        super(x, y, img)
        this.width = 50
        this.height = 20
        this.speed = random(0.2, 3)
    }
}