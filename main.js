function setup() {
    video = createCapture(VIDEO)
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Initialised');
}

function draw() {
    background('#969A97')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}