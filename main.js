let video;

let classifier;
let model = "./mask_model/"

let result_input;

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
    classifier.classify(video, (error, result) => {
        if (error) console.error("Fatal error " + error);

        result_input = select("#result");
        result_input.elt.value = (result[0].label === "mask") ? "LLEVAS MASCARILLA" + result[0].confidence : "NO LLEVAS MASCARILLA" + result[0].confidence;
        classifyVideo();
    });
}
