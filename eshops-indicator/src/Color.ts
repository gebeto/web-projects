export class Color {
    private r: any;
    private g: any;
    private b: any;

    constructor(_r, _g, _b) {
        this.r = _r;
        this.g = _g;
        this.b = _b;
    }

    setColors(_r, _g, _b) {
        this.r = _r;
        this.g = _g;
        this.b = _b;
    }

    getColors() {
        return {
              r: this.r,
              g: this.g,
              b: this.b,
        };
    }
}