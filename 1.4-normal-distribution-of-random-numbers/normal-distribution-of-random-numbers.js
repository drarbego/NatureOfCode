const SIZE_X = 640;
const SIZE_Y = 320;
let origin;
let maxDist;

function setup() {
    createCanvas(SIZE_X, SIZE_Y);
    origin = createVector(SIZE_X/2, SIZE_Y/2);
    maxDist = Math.sqrt(Math.pow(origin.x, 2) + Math.pow(origin.y, 2));
    background(0);
}
  
function draw() {
    drawRandomSplatDots();
}

function drawEllipsesInX() {
    let num = randomGaussian();
    let sd = 60;
    let mean = origin.x;
    let x = sd * num + mean;

    noStroke();
    fill(128, 10);
    ellipse(x, 180, 16, 16);
}

function drawRandomSplatDots() {
    let sd = 60;
    let xMean = origin.x;
    let yMean = origin.y;

    let x = sd * randomGaussian() + xMean;
    let y = sd * randomGaussian() + yMean;

    noStroke();
    let distanceToOrigin = createVector(x, y).dist(origin);
    let r = Math.sin((distanceToOrigin/maxDist) * (Math.PI/2)) * 255;
    let g = 0;
    let b = Math.cos((distanceToOrigin/maxDist) * (Math.PI/2)) * 255;
    fill(r, g, b, 128);
    ellipse(x, y, 16, 16);
}
