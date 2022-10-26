class Walker {
    constructor() { 
        this.x = 0;
        this.y = 0;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }
}

let walker = new Walker();


function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(220);
}
