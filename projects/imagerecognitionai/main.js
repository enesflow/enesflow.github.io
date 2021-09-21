let mobilenet;
var dropimg;

function highlight() {
    dropzone.style.background = "#777";
}
function unhighlight() {
    dropzone.style.background = "#fff";
}
function gotFile(file) {
    ai(file.data);
}

function ai(img) {
    background(255);
    myimg = createImg(img, imageReady);
    myimg.hide();
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let prob = "%" + Math.floor(results[0].confidence * 100);
        console.log(label);

        fill(0);
        textSize(30);
        text(label, 10, height - 136);
        text(prob, 10, height - 100);
    }
}

function modelReady() {
    console.log("Model is ready!");
    mobilenet.predict(myimg, gotResult);
}

function imageReady() {
    console.log("Image is ready");
    dropimg = image(myimg, 0, 0, width - 200, height - 200);
}

function setup() {
    var mycanvas = createCanvas(windowWidth, windowHeight);
    mycanvas.parent("#container");
    input = createFileInput(gotFile);
    input.position(10, height - 50);

    $("#container").append(
        '<div id="dropzone" class="col s12">Drop your image here!</div>'
    );
    $("input[type='file']").attr("id", "file");
    background(255);
    var dropzone = select("#dropzone");
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
}
