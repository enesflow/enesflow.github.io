let date = 0;
let h = "";
let m = "";
let s = "";
var ms = 0;
var gap = 50;
var thickness = 17.5;

const bcolor = 255;

let height = 0;
let width = 0;

var d = width / 1.25;

function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
}

function draw() {
    resizeCanvas(width, height);

    //Update
    width = Math.min(innerWidth, innerHeight);
    height = Math.min(innerWidth, innerHeight);
    d = width / 1.25;
    gap = width / 16.875;
    thickness = width / 50;

    background(bcolor);

    date = new Date();

    h = hour();
    m = minute();
    s = second();
    ms = date.getMilliseconds();


    drawTime("h");
    drawTime("m");
    drawTime("s");


    //Dot
    noStroke();
    fill(0);
    ellipse(width / 2, height / 2, (width / 130), (height / 130));

}

function drawTime(what) {
    if (what === "h") {
        strokeWeight(thickness);
        stroke(252, 32, 101);
        noFill();
        arc(width / 2, height / 2, d, d, -90, ((360 / 12) * h - 90) + (m / 2));

    }
    if (what === "m") {
        strokeWeight(thickness);
        stroke(194, 255, 3);
        noFill();
        arc(width / 2, height / 2, d - gap, d - gap, -90, ((360 / 60) * m - 90) + (s / 10));

    }
    if (what === "s") {
        strokeWeight(thickness);
        stroke(1, 253, 178);
        noFill();
        arc(width / 2, height / 2, d - gap * 2, d - gap * 2, -90, ((360 / 60) * s - 90) + (ms / 166.66666));

    }
}
