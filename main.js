function setup(){
    video= createCapture(VIDEO);
    video.size(550.500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    posenet= ml5.poseNet(video, modelLoaded);
    poseNeton('pose', gotPoses);
}


function draw(){
    background('#8E4585');
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if(results.lenght>0)
    {
        console.log(results);
    }
}



