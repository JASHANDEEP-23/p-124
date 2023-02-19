function setup(){
    canvas = createCanvas(500,400)
    canvas.center()
    background("#9bebdf")
    webcam = createCapture(VIDEO)
    webcam.size(500,400)
    webcam.position(25,235)
    poseNet = ml5.poseNet(webcam , modelLoaded)
    poseNet.on('pose' , gotResults)



}

function gotResults(results){
 if(results.length > 0){
  console.log(results)
 }
}

function modelLoaded(){
    console.log('model is loaded !')
}
