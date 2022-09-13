Webcam.attach( '#camera' );

camera = document.getElementById("camera");
Webcam.set({
width:300,
height:300,
image_format : 'png',
png_quailty:90
});




function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        
    });
}
console.log('ml5 version;',ml5.version);

classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/i83_R6irt/model.json',modelloaded);