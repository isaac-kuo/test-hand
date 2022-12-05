const modelParams ={
    flipHorizontal: true,
    imageScaleFactor: 0.9,
    maxNumBoxes: 2,
    iouThreshold: 0.9,
    scoreThreshold: 0.9,
}



navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;


const video =document.querySelector('#video');
const audio =document.querySelector('#audio');
const canvas =document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;




handTrack.startVideo(video)
        .then(status =>{
            if(status){
                navigator.getUserMedia({video: {}}, stream =>{
                    video.srcObject = stream;
                    setInterval(runDetection,100);
                },
                err => console.log(err)
                );
            }
        })

function runDetection(){
    model.detect(video)
        .then(predictions => {
            console.log(predictions)
            model.renderPredictions(predictions,canvas,context,video);
            if(predictions.length > 0){
                audio.play();
            }
        
        });
}




handTrack.load(modelParams).then(lmodel => {
    model=lmodel
});