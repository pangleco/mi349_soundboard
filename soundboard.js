
var buttonHat = document.getElementById('hat')
var buttonKick = document.getElementById('kick')
var buttonSplash = document.getElementById('splash')
var hat = new Audio('Hi Hat 1.wav');
var kick = new Audio('Kick 1.wav');
var splash = new Audio('Splash 1.wav');

buttonHat.addEventListener('click', function () {
    hat.play();
})

buttonKick.addEventListener('click', function () {
    kick.play();
})

buttonSplash.addEventListener('click', function () {
    splash.play();
})