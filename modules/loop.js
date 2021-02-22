export class Loop {
    constructor (_update, _display) {
        this.update = _update;
        this.display = _display;

        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.maxInterval = 40; // так перестаёт обновлятся в фотновом режиме

        this.animate = this.animate.bind(this);
        this.animate(); // первый запуск из констрцуктора
    }
    animate(currentTime = 0) { // 0 для первого запуска
        requestAnimationFrame(this.animate);

        this.deltaTime = currentTime - this.lastUpdate; // 0.0016
        
        if (this.deltaTime < this.maxInterval) {
            this.update(this.deltaTime / 1000); // конвертация мс в сек
            this.display(1000 / this.deltaTime |0); // fps ~60
        }
        

        this.lastUpdate = currentTime;
    }
}