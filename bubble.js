function Bubble(x, y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        imageMode(CENTER);
        image(img, this.x, this.y, 50, 50);
        //ellipse(this.x, this.y, 48, 48);
    }

    this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}