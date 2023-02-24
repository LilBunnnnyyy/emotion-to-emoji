camera=document.getElementById("camera");
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 Webcam.attach(camera);
 function a1(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/>';
    } ); 
 }
 function speak(){
    var synth = window.speechSynthesis;
    y="the first prediction is "+prediction1;
    y1="  and the second prediction is "+prediction2;
    h=new SpeechSynthesisUtterance(y+y1);
    synth.speak(h);
 }
 prediction1="";
 prediction2="";
 console.log("ml5 version is",ml5.version);
 x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S1KUngS8c/model.json',m);
 function m(){
console.log("model is loaded");
 }
 function a(){
    a2=document.getElementById("img1");
    x.classify(a2,answer);
 }
 function answer(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    prediction1=result[0].label;
    prediction2=result[1].label;
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label;
    speak();
    if(result[0].label=="happy"){
        document.getElementById("e").innerHTML="&#128578;";
    }
    if(result[0].label=="lost face"){
        document.getElementById("e").innerHTML="&#129300;";
    }
    if(result[0].label=="cry"){
        document.getElementById("e").innerHTML="&#128557;";
    }
    if(result[1].label=="happy"){
        document.getElementById("e1").innerHTML="&#128578;";
    }
    if(result[1].label=="lost face"){
        document.getElementById("e1").innerHTML="&#129300;";
    }
    if(result[1].label=="cry"){
        document.getElementById("e1").innerHTML="&#128557;";
    }
}

 }