let video;
let classifier;
let model = "./mask_model/"

function preload() {
    classifier = ml5.imageClassifier(model + "model.json");
    console.log("MODEL LOADED!");
}

function setup() {
    createCanvas(600, 500);
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
}

function draw() {
    image(video, 0, 0);
}

function classifyVideo() {
    classifier.classify(video).then((results) => {
        showOnDOM(results);
    });
}

function showOnDOM(results) {
    let result_input = select("#result");
    result_input.elt.value = results[0].label + " : " + results[0].confidence;
    classifyVideo();
}
