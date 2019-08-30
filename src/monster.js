const assets = require('./assets');
import { Entity } from './entity';

export class Monster extends Entity {
    constructor() {
        super();
        this.yPosition = 0;
    }

    load() {
        return assets.loadImage('../images/Green_Blob.png').then(img => {
            this.image = img;
        })
    };

    draw(canvas) {
        console.log(this.yPosition);
        canvas.drawImage(this.image, 25, this.yPosition, 128, 128);
    }

    update() {
        this.yPosition = this.yPosition + 55;
    }
}