function preload(){

}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.posistion(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="black";
}
function draw() {
    image(video,0,0,500,400);
    tint(tint_color);
}