let audio = document.querySelector('#audio');
let pause = document.querySelector('#pause');


window.onclick = function audioPlay(){
    audio.play();
};


function audioPause(){
    audio.pause();
}
