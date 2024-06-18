export const Shapes = {
    square: 'square',
    circle: 'circle',
    triangle: 'triangle'
} as const;

export type Shape = keyof typeof Shapes;

export class NecCursor {
    private _element: HTMLElement;
    private _size?: number;
    private _shape?: Shape;

    constructor(element: HTMLElement, shape?: Shape, size?: number) {
        this._element = element;
        this._size = size;
        this._shape = shape;
    }

    public get element(): HTMLElement {
        return this._element;
    }

    public set element(val: HTMLElement) {
        this._element = val;
    }

    public get size(): number | undefined {
        return this._size;
    }

    public set size(val: number) {
        this._size = val;
    }

    public get shape(): Shape | undefined {
        return this._shape;
    }

    public set shape(val: Shape) {
        this._shape = val;
    }

    public setStyles(): void {
        this.element.style.setProperty('position', 'fixed');
        this.element.style.setProperty('top', '--_y');
        this.element.style.setProperty('left', '--_x');
        this.element.style.setProperty('--_y', '0px');
        this.element.style.setProperty('--_x', '0px');

        const size = (this.size ?? 48).toString();
        switch (this.shape ?? '') {
            case Shapes.circle:
                this.element.style.setProperty('border-radius', '100%');
                this.element.style.setProperty('width', `${size}px`);
                this.element.style.setProperty('height', `${size}px`);
                break;

            case Shapes.triangle:
                this.element.style.border =
                    'currentColor ' + (this.size ?? 48) / 2 + 'px solid';
                this.element.style.setProperty('border-top-color', 'transparent');
                this.element.style.setProperty(
                    'border-inline-color',
                    'transparent'
                );
                this.element.style.setProperty('transform-origin', 'bottom');
                this.element.style.setProperty('scale', '1 2');
                break;

            case Shapes.square:
            case '':
            default:
                this.element.style.setProperty('width', `${size}px`);
                this.element.style.setProperty('height', `${size}px`);
                break;
        }
    }
}
