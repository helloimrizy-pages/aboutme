const textElement = ['content creator','youtuber', 'vlogger', 'storyteller']
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function typingEffect(){
    
    if(count == textElement.length){
        count = 0;
    }

    currentText = textElement[count];

    words = currentText.slice(0, ++textIndex);
    document.querySelector('.typing-effect').textContent = words;
    
    if(words.length == currentText.length){
        count++;
        textIndex = 0;
    }
    setTimeout(typingEffect, 350);
})();