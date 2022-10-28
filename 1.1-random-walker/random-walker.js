class Walker {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    randomStep() {
        let choice = parseInt(random(4));
        switch(choice){
            case 0:
                this.x += 1;
                break;
            case 1:
                this.x -= 1;
                break;
            case 2:
                this.y += 1;
                break;
            case 3:
                this.y -= 1;
                break;
        }
    }

    improvedRandomStep() {
        let stepX = random(-1, 1);
        let stepY = random(-1, 1);

        this.x += stepX;
        this.y += stepY;
    }
}

let walker = null;

function setup() {
    createCanvas(400, 400);
    background(220);
    walker = new Walker(width/2, height/2);
}
  
function draw() {
    walker.display();
    walker.improvedRandomStep();
}
