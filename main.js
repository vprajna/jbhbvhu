objects=[""];
status="";
function preload() {
    video=createVideo("DTYs.gif");
    }
    function setup() {
    canvas=createCanvas(500, 500);
    canvas.center();
    video.hide();
    }
    function start(){
        object=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="status:detecting objects";
    }
    function modelLoaded() {
        console.log('model loaded');
        video.speed(1);
        video.volume(1);
        video.loop();
    }
    function gotPoses(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
        objects=results.results;
    }
    function draw() {
    image(video,0,0,500,500);
    if (status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i ++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects Detecting : "+object.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence *100);
            text(objects[i].label+"" +percent +"%",obects[i].x+15, objects.y+15);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, ojects[i].y, objects[i].width, objects[i].height);
        }
}
    }