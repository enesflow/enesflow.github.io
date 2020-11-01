function random(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

const sizesub = 50;

let width = Math.min(innerWidth, innerHeight) - sizesub;
let height = width;

var sWidth = width / 25;
var sHeight = height / 25;

var x = 0 - sWidth; /* + sWidth*/
var y = 0; /*sWidth*/

var fx = Math.floor(random(0, width) / sWidth) * sWidth;
var fy = Math.floor(random(0, height) / sWidth) * sWidth;

var orn = [1, 0];

var posListx = [];
var posListy = [];
var lenght = 4;
var bcolor = 0;

const tol = 2;

var isdead = false;

const deadscreen = document.getElementById("dead");
const deadtext = document.getElementById("deadtext");

document.onkeypress = function (e) {
    if (isdead) {
        location.reload();
    }
};
deadscreen.addEventListener("click", function () {
    if (isdead) {
        location.reload();
    }
});

function setup() {
    createCanvas(width, height);
    background(bcolor);
    frameRate(5);
}

function draw() {
    width = Math.min(innerWidth, innerHeight) - sizesub;
    height = width;

    keyPressed();

    if (posListx.length > lenght - 1) {
        posListx.shift();
        posListy.shift();
    }

    posListx.push(x);
    posListy.push(y);
    x += orn[0] * sWidth;
    y += orn[1] * sHeight;

    if (amiin(x, y)) {
        deadscreen.style.display = "inline-block";
        document.querySelector(".p5Canvas").style.display = "none";
        deadtext.innerHTML = "Dead! Score: " + (lenght - 4);
        isdead = true;
    }
    if (
        x < 0 - sWidth ||
        x > width - sWidth ||
        y < 0 - sHeight ||
        y > height - sHeight
    ) {
        deadscreen.style.display = "inline-block";
        document.querySelector(".p5Canvas").style.display = "none";
        deadtext.innerHTML = "Dead! Score: " + (lenght - 4);
        isdead = true;
    }

    if (x + tol >= fx && x - tol <= fx && y + tol >= fy && y - tol <= fy) {
        lenght += 1;
        while (true) {
            fx = Math.floor(random(0, width) / sWidth) * sWidth;
            fy = Math.floor(random(0, height) / sWidth) * sWidth;
            if (amiin(fx, fy)) {
                continue;
            }
            break;
        }
    }

    drawSnake();
    snakeRemover();
    drawFood();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        or("left");
    } else if (keyCode == RIGHT_ARROW) {
        or("right");
    } else if (keyCode == DOWN_ARROW) {
        or("down");
    } else if (keyCode == UP_ARROW) {
        or("up");
    }
}

function amiin(wx, wy) {
    for (var i = 0; i < lenght; i++) {
        if (posListx[i] == wx) {
            for (var j = 0; j < lenght; j++) {
                if (posListy[i] == wy) {
                    return true;
                }
            }
        }
    }
    return false;
}

function or(what) {
    if (what === "left" && orn[0] != 1) {
        orn = [-1, 0];
    }
    if (what === "right" && orn[0] != -1) {
        orn = [1, 0];
    }
    if (what === "down" && orn[1] != -1) {
        orn = [0, 1];
    }
    if (what === "up" && orn[1] != 1) {
        orn = [0, -1];
    }
}

function drawSnake() {
    fill(255);
    rect(x, y, sWidth, sHeight);
}

function snakeRemover() {
    fill(0);
    rect(posListx[0], posListy[0], sWidth, sHeight);
}

function drawFood() {
    fill(255, 0, 0);
    rect(fx, fy, sWidth, sHeight);
}

//Stackoverflow
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return (
        evt.touches || // browser API
        evt.originalEvent.touches
    ); // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            or("left");
        } else {
            or("right");
        }
    } else {
        if (yDiff > 0) {
            or("up");
        } else {
            or("down");
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
