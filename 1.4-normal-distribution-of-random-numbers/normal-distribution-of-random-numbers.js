function setup() {
    createCanvas(640, 360);
    background(0);
}
  
function draw() {
    let num = randomGaussian();
    let sd = 60;
    let mean = 320;
    let x = sd * num + mean;

    noStroke();
    fill(128, 10);
    ellipse(x, 180, 16, 16);
}
