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

    for (let i = 0; i < 20; i++) {
        fishes1[i] = new Fish('regular', windowWidth, random(height), fish1Img, [0.2, 3])
    }

    for (let i = 0; i < 8; i++) {
        fishes1[i] = new Fish('large', windowWidth, random(height), fish2Img, [3, 5])
    }

    for (let i = 0; i < 3; i++) {
        fishes1[i] = new Fish('poison', windowWidth, random(height), fish3Img, [3, 10])
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