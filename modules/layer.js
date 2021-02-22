export class Layer {
    constructor (container) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext(`2d`);
        container.appendChild(this.canvas); // создаёт и помещает новый канвас в любой контэйнер

        this.fitToContainer = this.fitToContainer.bind(this);
        this.fitToContainer();

        addEventListener (`resize`, () => this.fitToContainer(this.canvas));
    }
    // подгоняет канвас под размер контэйнера
    fitToContainer() {
        this.w = this.canvas.width  = this.canvas.offsetWidth;
        this.h = this.canvas.height = this.canvas.offsetHeight;
    }
}