var bubbles = [];
var flowers = [];

function preload()  {
    flowers[0] = loadImage("images/flower0.png");
    flowers[1] = loadImage("images/flower1.png");
    flowers[2] = loadImage("images/flower2.png");
    flowers[3] = loadImage("images/flower3.png");
}

function setup() {
    createCanvas (600, 400);
}

function mousePressed() {
    var r = floor(random(0, flowers.length));
    var b = new Bubble(mouseX, mouseY, flowers[r]);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
    }
}