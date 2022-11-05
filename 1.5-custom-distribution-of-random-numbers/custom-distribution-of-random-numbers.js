const SIZE_X = 640;
const SIZE_Y = 320;

class Walker {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
        this.newX = null;
        this.newY = null;
        this.currentMode = "random";
    }

    display() {
        stroke(0);

        point(this.x, this.y);
    }

    step() {
        this.x = this.newX;
        this.y = this.newY;
        let stepSize = this.monteCarlo() * 20; // 20 is max step size
    }

    monteCarlo() {
        let num = random();
        let qualifier = random();
        // qualification probability is relative to the picked number
        // a higher number has higher chance of being picked
        let probability = num;

        while(qualifier >= probability) {
            num = random();
            qualifier = random();
            if(qualifier < probability) return num;
        }

        return num;
    }

    randomStep() {
        let choice = parseInt(random(4));
        switch(choice) {
            case 0:
                this.x += STEP_SIZE;
                break;
            case 1:
                this.x -= STEP_SIZE;
                break;
            case 2:
                this.y += STEP_SIZE;
                break;
            case 3:
                this.y -= STEP_SIZE;
                break;
        }
    }

    improvedRandomStep() {
        let stepX = random(-STEP_SIZE, STEP_SIZE);
        let stepY = random(-STEP_SIZE, STEP_SIZE);

        this.x += stepX;
        this.y += stepY;
    }

    stepSkewedRight() {
        let chance = random(1);
        if (chance < 0.4) this.x += STEP_SIZE;
        else if (chance < 0.6) this.x -= STEP_SIZE;
        else if (chance < 0.8) this.y += STEP_SIZE;
        else this.y -= STEP_SIZE;
    }

    stepSkewedLeft() {
        let chance = random(1);
        if (chance < 0.4) this.x -= STEP_SIZE;
        else if (chance < 0.6) this.x += STEP_SIZE;
        else if (chance < 0.8) this.y += STEP_SIZE;
        else this.y -= STEP_SIZE;
    }
}

function setup() {
    createCanvas(SIZE_X, SIZE_Y);
    background(0);
}
  
function draw() {
}

