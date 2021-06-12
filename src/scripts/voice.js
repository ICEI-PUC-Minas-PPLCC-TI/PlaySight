$(document).ready( function() {


    $(document).on("click", "#button-voice", function () {

        texto = $('#corpo').children(":visible").text() 

        const voices = window.speechSynthesis?.getVoices();

        const brVoice = voices?.find((voices) => /pt-BR/.test(voices.lang));
    
        const utterance = new SpeechSynthesisUtterance()
    
    
       utterance.text = texto; // é o texto que sera lido
       utterance.lang = 'pt-BR' // língua a ser falado
         utterance.voice = brVoice // voz defina acima
        utterance.rate = 0.8 // velocidade de fala
    
       window.speechSynthesis.speak(utterance);



    });




});