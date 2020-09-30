function random(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

const width = 500;
const height = width;

var sWidth = width / 25;
var sHeight = height / 25;

var x = 0 - sWidth/* + sWidth*/;
var y = 0/*sWidth*/;

var fx = Math.floor(random(0,width) / (sWidth)) * sWidth;
var fy = Math.floor(random(0,height) / (sWidth)) * sWidth;

var orn = [1,0];

var posListx = [];
var posListy = [];
var lenght = 4;
var bcolor = 0;


function setup() {
    createCanvas(width, height);
    background(bcolor);
    frameRate(5);
}
function draw() {
    keyPressed();


    if ((posListx.length) > lenght - 1) {
        posListx.shift();
        posListy.shift();
    }



    posListx.push(x);
    posListy.push(y);
    x += orn[0] * sWidth;
    y += orn[1] * sHeight;


    if ((x === fx) && (y == fy)) {
        lenght += 1;
        while (true) {
            fx = Math.floor(random(0,width) / (sWidth)) * sWidth;
            fy = Math.floor(random(0,height) / (sWidth)) * sWidth;
            if (amiin(fx,fy)) {
                continue
            }
            break;
        }

    }


    drawSnake();
    snakeRemover();
    drawFood();

    if (amiin(x,y)) {
        location.reload();
    }
    if (((x < 0) || (x > (width - sWidth)) || ((y < 0) || (y > (height - sWidth))))) {
        location.reload();
    }



}

function keyPressed() {
    if ((keyCode == LEFT_ARROW) && (orn[0] != 1)){
        orn = [-1,0];
    } else if ((keyCode == RIGHT_ARROW) && (orn[0] != -1)) {
        orn = [1,0];
    } else if ((keyCode == DOWN_ARROW) && (orn[1] != -1)) {
        orn = [0,1];
    } else if ((keyCode == UP_ARROW) && (orn[1] != 1)) {
        orn = [0,-1];
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

function drawSnake() {
    fill(255);
    rect(x,y,sWidth,sHeight);
}
function snakeRemover() {
    fill(0);
    rect(posListx[0],posListy[0],sWidth,sHeight);
}
function drawFood() {
    fill(255,0,0);
    rect(fx,fy,sWidth,sHeight);
}
