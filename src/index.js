const assets = require('./assets');
const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

const VIEWPORT_HEIGHT = 1080;
const VIEWPORT_WIDTH = 720;
const SCREEN_VIEWPORT_RATIO = window.innerHeight / VIEWPORT_HEIGHT;

canvas.setAttribute('height', window.innerHeight);
canvas.setAttribute('width', VIEWPORT_WIDTH * SCREEN_VIEWPORT_RATIO);


assets.loadImage('../images/Green_Blob.png').then( img => {
    // Drawing a Background
    context.fillStyle = '#e2fcbf';
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // context.drawImage(img, 25, 25);
    context.drawImage(img, 25 * SCREEN_VIEWPORT_RATIO, 25 * SCREEN_VIEWPORT_RATIO, 
                      128 * SCREEN_VIEWPORT_RATIO, 128 * SCREEN_VIEWPORT_RATIO);
});