function Bubble(x, y, img) {
    this.x = x;
    this.y = y;
    this.col = color(255, 100);
    this.img = img;

    this.display = function() {
        imageMode(CENTER);
        image(this.img, this.x, this.y, 50, 50);
    }

    this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}