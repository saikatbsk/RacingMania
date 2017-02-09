function roadMarking() {
    this.w = 10;
    this.h = 30;

    this.x = floor(width/2 - this.w/2);
    this.y = 0;

    this.show = function() {
        strokeWeight(3);
        fill(255, 182, 58);
        rect(this.x, this.y, this.w, this.h);
    }

    this.update = function() {
        this.y += playerSpeed;
    }

    this.offscreen = function() {
        return (this.y > height);
    }
}
