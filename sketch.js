//We've created empty arrays to will be fill
var bubbles = [];
var flowers = [];

function preload()  {
    //We load previously the flowers images whole of LOOP FOR
    for (i = 0; i < 8; i++) {
        //The names of pictures are correlatives
        flowers[i] = loadImage("images/flower" + i + ".png");
    }
}

function setup() {
    //We've created canvas
    createCanvas (600, 400);
}

function mousePressed() {
    //The "r" variable stores a random number between 0 and the length of flower array
    var r = floor(random(0, flowers.length));
    //We've created a new variable called "b" which is a NEW INSTANCE of Bubble constructor function
    //"b" variable has 3 arguments like mouseX, mouseY, flowers[]
    var b = new Bubble(mouseX, mouseY, flowers[r]);
    //The PUSH method will add 3 arguments to the end of the list
    bubbles.push(b);
}

function draw() {
    //Fill the background with water color
    background(21, 183, 224);
    //LOOP FOR call to the methods "update" and "display" from constructor function to bubbles array each time was run
    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
    }
}