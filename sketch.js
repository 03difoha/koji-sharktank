let fishes1 = []
let fishes2 = []
let fishes3 = []


function preload() {
    sharkImg = loadImage('img/shark.png');
    fish1Img = loadImage('img/fish1.png');
    fish2Img = loadImage('img/fish2.png');
    fish3Img = loadImage('img/fish3.png');

}

function setup() {
    bg = loadImage('img/bg.png');

    createCanvas(windowWidth, windowHeight);

    s = new Shark(0, 0)

    for (let i = 0; i < 10; i++) {
        fishes1[i] = new regularFish(windowWidth, random(height), fish1Img)

    }

    for (let i = 0; i < 5; i++) {
        fishes1[i] = new largeFish(windowWidth, random(height), fish2Img)
    }

    for (let i = 0; i < 2; i++) {
        fishes1[i] = new poisonFish(windowWidth, random(height), fish3Img)
    }


}

function draw() {
    background(bg);
    s.show();
    s.followMouse();

    for (let f of fishes1) {
        f.show();
        f.move();
    }

    // f1.show()
    // f1.move()

}