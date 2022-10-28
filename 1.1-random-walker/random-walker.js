const STEP_SIZE = 1;
let walker = null;

class Walker {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
        this.currentMode = "random";
    }

    setMode(newMode) {
        this.currentMode = newMode;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    step() {
        switch(this.currentMode) {
            case "random":
                this.randomStep();
                break;
            case "improvedRandom":
                this.improvedRandomStep();
                break;
            case "skewedRight":
                this.stepSkewedRight();
                break;
            case "skewedLeft":
                this.stepSkewedLeft();
                break;
        }
    }

    randomStep() {
        let choice = parseInt(random(4));
        switch(choice){
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
    createCanvas(400, 400);
    background(220);
    walker = new Walker(width/2, height/2);
}
  
function draw() {
    walker.display();
    walker.step();
}

function onRadioButtonClicked(element) {
    console.log(element.value);
    walker.setMode(element.value);
    console.log(walker.currentMode);
}
