let  speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("input").value;
    window.speechSynthesis.speak(speech);
});

