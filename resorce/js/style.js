let audio = document.querySelector('#audio');
let pause = document.querySelector('#pause');
let croc = document.querySelector('.croc');
let pre_img = document.querySelector('.pre_img');
let app = document.querySelector('.app');


croc.addEventListener('click', function shown(){
    app.style.display = 'block';
    pre_img.style.display = 'none';
    audio.play();

});


function audioPause(){
    audio.pause();
}
