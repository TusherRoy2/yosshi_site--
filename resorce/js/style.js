let audio = document.querySelector('#audio');
let pause = document.querySelector('#pause');


window.onfocus = function audioPlay(){
    audio.play();
};


function audioPause(){
    audio.pause();
}