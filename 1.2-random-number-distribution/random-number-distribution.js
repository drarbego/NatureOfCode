const numberSize = 20;
let barWidth;
let randomCounts;

function setup() {
    createCanvas(640, 240);

    barWidth = parseInt(width/numberSize);
    randomCounts = Array(numberSize).fill(0);
}
  
function draw() {
    background(255);
    let index = parseInt(random(randomCounts.length));
    randomCounts[index] += 1;

    stroke(0);
    fill(175);
    randomCounts.map((v, i) => {
        rect(i*barWidth, height - v, barWidth - 1, v);
    });
}
