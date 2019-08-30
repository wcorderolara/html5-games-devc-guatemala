
export class Entity {
    load() {
        throw new TypeError('Abstract class "Entity" cannot beinstantiated directly.');
    }
    draw(_canvas) {
        throw new TypeError('Abstract class "Entity" cannot beinstantiated directly.');
    }
    update(_elapsedSec) {
        throw new TypeError('Abstract class "Entity" cannot beinstantiated directly.');
    }
}