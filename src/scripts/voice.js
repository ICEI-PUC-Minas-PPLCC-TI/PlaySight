$(document).ready( function() {


    $(document).on("click", "#button-voice", function () {

        texto = $('#corpo').children(":visible").text() 

        const voices = window.speechSynthesis?.getVoices();

        const brVoice = voices?.find((voices) => /pt-BR/.test(voices.lang));
    
        const falar = new SpeechSynthesisUtterance()
    
    
       falar.text = texto; // é o texto que sera lido
       falar.lang = 'pt-BR' // língua a ser falado
         falar.voice = brVoice // voz defina acima
        falar.rate = 0.8 // velocidade de fala
    
       window.speechSynthesis.speak(falar);



    });




});