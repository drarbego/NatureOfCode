const SIZE_X = 640;
const SIZE_Y = 320;
const STEP_SIZE = 20;

const MAX_COLOR = 255;
const MIN_COLOR = 30;
let origin;

class Walker {
    constructor(x, y, maxStepSize) { 
        this.pos = createVector(x, y);
        let dir = this._getRandomStepVector();
        this.nextPos = p5.Vector.add(this.pos, dir);

        this.maxStepSize = maxStepSize;
        this.color = this._getColorFromStep(dir);
    }

    display() {
        stroke(this.color);

        line(this.pos.x, this.pos.y, this.nextPos.x, this.nextPos.y);
    }

    step() {
        this.pos = this.nextPos;

        let dir = this._isOutsideScreen() ? this._getVectorToOrigin() : this._getRandomStepVector();
        this.nextPos = p5.Vector.add(this.pos, dir);

        this.color = this._getColorFromStep(dir);
    }

    _getColorFromStep(dir) {
        // the longer the step the darker it is displayed
        const diff = MAX_COLOR - MIN_COLOR;
        return MIN_COLOR + (diff - ((dir.mag() / STEP_SIZE) * diff));
    }

    _getVectorToOrigin() {
        let dir = p5.Vector.sub(origin, this.pos);

        let stepSize = this._monteCarlo() * this.maxStepSize;
        dir.normalize();
        dir.mult(stepSize)

        return dir;
    }

    _getRandomStepVector() {
        let dir = createVector(random(-1, 1), random(-1, 1));

        let stepSize = this._monteCarlo() * this.maxStepSize;
        dir.normalize();
        dir.mult(stepSize);

        return dir
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

    _isOutsideScreen() {
        return (
            this.pos.x < 0 ||
            this.pos.x > SIZE_X ||
            this.pos.y < 0 ||
            this.pos.y > SIZE_Y
        );
    }
}

let walker;

function setup() {
    createCanvas(SIZE_X, SIZE_Y);
    background(0);
    origin = createVector(SIZE_X/2, SIZE_Y/2);
    walker = new Walker(origin.x, origin.y, STEP_SIZE);
}
  
function draw() {
    walker.display();
    walker.step();
}
