let audio = document.querySelector('#audio');
let pause = document.querySelector('#pause');


window.addEventListener('load', function audioPlay(){
      audio.play();
});


function audioPause(){
    audio.pause();
}
