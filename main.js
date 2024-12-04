var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    //start es funcion de WebSpeechAPI
    recognition.start();

}

recognition.onresult = function(event)
//onresult contiene todos los valores de la voz convertida a texto (es funcion de WebSpeechAPI)
{
    console.log(event);

    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    if (Content == "Toma mi selfie")
    {
        console.log("tomando selfie----")
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function()
        {
            take_selfie();
            save();
        }, 5000
    )
}


camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "selfie_image" src="'+data_uri+'"/>';
    })
}

function save()
{
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src;
    link.herf = image;
    link.click();
}

