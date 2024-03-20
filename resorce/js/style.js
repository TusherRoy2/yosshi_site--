let audio = document.querySelector('#audio');
let pause = document.querySelector('#pause');


window.onscroll = function audioPlay(){
    audio.play();
};


function audioPause(){
    audio.pause();
}
