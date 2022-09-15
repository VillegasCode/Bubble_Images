//Constructor Function called Bubble have 3 arguments
function Bubble(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;

    //"display" is a method to Bubble constructor function is used to show some flower on the canvas
    this.display = function() {
        //This is used to create a flower from X axis and Y axis when we clicked
        imageMode(CENTER);
        //This show the picture of a flower
        image(this.img, this.x, this.y, 50, 50);
    }

    //"update" is a method to constructor function called "Bubble"
    //Its function is to make the figures move ramdom between X axis and Y axis -1 and 1
    this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}