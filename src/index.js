const assets = require('./assets.js');
import { GameCanvas } from './canvas.js';
import { Monster } from './monster.js';
import { Wall } from './wall.js';
import { ToolPalette } from './toolPalette.js';
import { InputHelper } from './inputHelper.js';
import { GameplayGrid } from './gameplayGrid';

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));
new InputHelper(gameCanvas);

const monster = new Monster();
const grid = new GameplayGrid();
const entities = [ monster, grid, new ToolPalette(gameCanvas, grid) ];
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
