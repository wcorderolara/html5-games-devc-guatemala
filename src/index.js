const assets = require('./assets');
const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

assets.loadImage('../images/Green_Blob.png').then( img => {
    context.drawImage(img, 25, 25);
});