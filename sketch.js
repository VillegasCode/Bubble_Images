var bubbles = [];
var img;

function preload()  {
    //img = loadImage("https://upload.wikimedia.org/wikipedia/commons/3/38/Flower_July_2011-2_1_cropped.jpg");
    img = loadImage("images/flower0.png");
}

function setup() {
    createCanvas (600, 400);
}

function mousePressed() {
    var b = new Bubble(mouseX, mouseY);
    bubbles.push(b);
}

function draw() {
    background(0);
    //image(img, 50, 50, 300, 300);
    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
    }
}