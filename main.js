function setup() {
    video=createCapture(VIDEO);
    video.size(570,500);
    canvas=createCanvas(450,400);
    canvas.position(595,150);
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses );
}
function ModelLoaded() {
    console.log("Model Loaded!");
}
function gotPoses(){
if(results>0) {
console.log(results);

}
}