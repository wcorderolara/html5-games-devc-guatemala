const assets = require('./assets');
import { GameCanvas } from './canvas';

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));

assets.loadImage('../images/Green_Blob.png').then( img => {
    gameCanvas.drawImage(img, 25, 25, 128, 128);    
});