class poisonFish extends Fish {
    constructor(x, y, img) {
        super(x, y, img)
        this.width = 70
        this.height = 30
        this.speed = random(3, 8)
    }
}