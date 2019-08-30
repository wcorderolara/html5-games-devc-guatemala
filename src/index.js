const assets = require('./assets.js');
import { GameCanvas } from './canvas.js';
import { Monster } from './monster.js';

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));

const monster = new Monster();
const entities = [monster];

Promise.all(
    entities.map(entity => entity.load())
).then(
    requestAnimationFrame(drawGame)
)

function drawGame() {
    entities.forEach( entity => {
        entity.load().then( () => {
            entity.draw(gameCanvas);
        })
    })
}

requestAnimationFrame(drawGame);
