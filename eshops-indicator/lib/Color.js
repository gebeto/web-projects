"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color = /** @class */ (function () {
    function Color(_r, _g, _b) {
        this.r = _r;
        this.g = _g;
        this.b = _b;
    }
    Color.prototype.setColors = function (_r, _g, _b) {
        this.r = _r;
        this.g = _g;
        this.b = _b;
    };
    Color.prototype.getColors = function () {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
        };
    };
    return Color;
}());
exports.Color = Color;
