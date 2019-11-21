class largeFish extends Fish {
    constructor(x, y, img) {
        super(x, y, img)
        this.width = 150
        this.height = 50
        this.speed = random(3, 5)
    }
}