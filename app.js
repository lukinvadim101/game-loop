import {Layer} from './layer';

class App {
    constructor(container) {
        this.layer = new Layer(container); // создаёт новый канвас элемент
    }
}

onload = () => {
    new App(document.querySelector('body')); // помещает кэнвас в боди
}