const assets = require('./assets');
import { Entity } from './entity';
import { InputHelper } from './inputHelper';

export class ToolPalette extends Entity {
    constructor(canvas, grid) {
        super();
        this.grid = grid;
    
        this.isPlacingWall = false;
        this.wasMouseDown = false;
    
        this.wallToolBounds = {
          x: canvas.width / 2 - 128 - 8,
          y: canvas.height - 120,
          width: 128,
          height: 108
        };
      }

    load() {
        return assets.loadImage('../images/Wall.png').then(img => {
            this.wallToolImage = img;
        })
    }

    draw(canvas) {
        canvas.fillRect('#ffffff', 0, canvas.height - 130, canvas.width, 130);
        canvas.fillRect('#333333', 0, canvas.height - 133, canvas.width, 3);

        canvas.drawImage(
            this.wallToolImage,
            this.wallToolBounds.x,
            this.wallToolBounds.y,
            this.wallToolBounds.width,
            this.wallToolBounds.height
        );

        if (this.isPlacingWall) {
            canvas.drawImage(
                this.wallToolImage,
                InputHelper.instance.mouseX - this.wallGrabPos.x,
                InputHelper.instance.mouseY - this.wallGrabPos.y,
                this.wallToolBounds.width,
                this.wallToolBounds.height);
        }
    }

    update(_elapsedSec) {
        if (this._mouseInBounds(this.wallToolBounds)) {
            if (!this.wasMouseDown && InputHelper.instance.isMouseDown) {
                this.isPlacingWall = true;
                this.wallGrabPos = {
                    x: InputHelper.instance.mouseX - this.wallToolBounds.x,
                    y: InputHelper.instance.mouseY - this.wallToolBounds.y
                };
            }
        }
        if (this.isPlacingWall && this.wasMouseDown && !InputHelper.instance.isMouseDown) {
            this.grid.addWallPiece(
                InputHelper.instance.mouseX,
                InputHelper.instance.mouseY
            );
            this.isPlacingWall = false;
        }
        this.wasMouseDown = InputHelper.instance.isMouseDown;
    }

    _mouseInBounds(bounds) {
        return InputHelper.instance.mouseX > bounds.x &&
          InputHelper.instance.mouseX < bounds.x + bounds.width &&
          InputHelper.instance.mouseY > bounds.y &&
          InputHelper.instance.mouseY < bounds.y + bounds.height;
      }
}