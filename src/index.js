const assets = require('./assets.js');
import { GameCanvas } from './canvas.js';
import { Monster } from './monster.js';

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));

const monster = new Monster();
const entities = [monster];
let time = 0;

Promise.all(
    entities.map(entity => entity.load())
).then( () => {
    time = Date.now();
    requestAnimationFrame(gameLoop);
});

function gameLoop() {
    // timing
    const newTime = Date.now();
    const elapsedTimeInSec =  (newTime - time) / 1000;
    time = newTime;

    entities.forEach(entity => {
        entity.update(elapsedTimeInSec);
    });
    gameCanvas.clear();
    entities.forEach(entity => {
        entity.draw(gameCanvas);
    });

    requestAnimationFrame(gameLoop);
}
