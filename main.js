img="";
status="";
function preload(){
    img =loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Dog",45,75);
    noFill();
    stroke("#e09f9f");
rect(30,60,450,350);
fill("red");
text("cat", 320,120);
noFill();
stroke("black");
rect(300,90270,320);
}
function modelLoaded(){
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
}

