const assets = require('./assets');
import { Entity } from './entity';

export class Monster extends Entity {
    load() {
        return assets.loadImage('../images/Green_Blob.png').then(img => {
            this.image = img;
        })
    };

    draw(canvas) {
        canvas.drawImage(this.image, 25, 25, 128, 128);
    }

    update() {
        // Nothing yet;
    }
}