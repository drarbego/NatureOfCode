const SIZE_X = 200;
const SIZE_Y = 200;
const STEP_SIZE = 20;

class Walker {
    constructor(x, y, stepSize) { 
        this.x = x;
        this.y = y;
        this.stepSize = stepSize;

        let v = this._getRandomStepVector();
        this.newX = v.x;
        this.newY = v.y;
    }

    display() {
        stroke(255);

        line(this.x, this.y, this.newX, this.newY);
    }

    step() {
        this.x = this.newX;
        this.y = this.newY;

        let v = this._outsideScreen() ? this._getVectorToOrigin() : this._getRandomStepVector();

        this.newX = v.x;
        this.newY = v.y;
    }

    _getVectorToOrigin() {
        let pos = createVector(this.x, this.y);
        let origin = createVector(SIZE_X/2, SIZE_Y/2);
        let dir = p5.Vector.sub(origin, pos);

        let stepSize = this._monteCarlo() * this.stepSize;
        dir.normalize();
        dir.mult(stepSize)

        console.log(pos);
        console.log(dir);
        console.log(origin);

        return dir;
    }

    _getRandomStepVector() {
        let v = createVector(this.x, this.y);
        let dir = createVector(random(-1, 1), random(-1, 1));

        let stepSize = this._monteCarlo() * this.stepSize;
        dir.normalize();
        dir.mult(stepSize);

        return p5.Vector.add(v, dir);
    }

    _monteCarlo() {
        let num = random();
        let qualifier = random();
        // qualification probability is relative to the picked number
        // a higher number has higher chance of being picked
        let probability = 1 - num;

        while(qualifier >= probability) {
            num = random();
            qualifier = random();
            if(qualifier < probability) return num;
        }

        return num;
    }

    _outsideScreen() {
        return (
            this.x < 0 ||
            this.x > SIZE_X ||
            this.y < 0 ||
            this.y > SIZE_Y
        );
    }
}

let walker;

function setup() {
    createCanvas(SIZE_X, SIZE_Y);
    background(0);
    walker = new Walker(SIZE_X/2, SIZE_Y/2, STEP_SIZE);
}
  
function draw() {
    walker.display();
    walker.step();
}
