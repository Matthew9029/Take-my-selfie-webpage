var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox = document.getElementById("textbox");
function start(){
    textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        console.log("taking your selfie in 5 seconds");
        speak();
    }
        
    
}
 function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();

    },5000);
 }
 camera = document.getElementById("camera");
 Webcam.set({
    width:360,
    height:250,
    img_format : "jpeg",
    jpeg_quality : 90
 });

 function take_selfie(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML ='<img id="selfie_image" src="'+data_uri+'"/>';
    });
 }

 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
 }