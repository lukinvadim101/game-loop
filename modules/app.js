import {
    Layer
} from './layer.js';
import {
    Loop
} from './loop.js';

class App {
    constructor(container) {
        this.layer = new Layer(container); // создаёт новый канвас элемент

        this.rect = {
            x: 0,
            y: 0,
            w: 32,
            h: 32,
            vx: 150,
            vy: 150,
            color: `orange`
        };

        new Loop(this.update.bind(this), this.display.bind(this));
    }

    update(correction) { // correction = deltaTime
        if (this.rect.x <= 0 && this.rect.vx < 0 || this.rect.x + this.rect.w > this.layer.w && this.rect.vx > 0) {
            this.rect.vx = -this.rect.vx; // отскок
        }
        if (this.rect.y <= 0 && this.rect.vy < 0 || this.rect.y + this.rect.h > this.layer.h && this.rect.vy > 0) {
            this.rect.vy = -this.rect.vy;
        }

        this.rect.x += this.rect.vx * correction; // движение по ГГц
        this.rect.y += this.rect.vy * correction;
    }

    display(fps) { // что рисуем
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
        this.layer.context.fillStyle = this.rect.color;
        this.layer.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);

        this.layer.context.font = `40px Arial black`;
        this.layer.context.fillText(fps, 30, 60);
    }
}

onload = () => { // запуск с закргузкой
    new App(document.querySelector('body')); // помещает кэнвас в боди
};