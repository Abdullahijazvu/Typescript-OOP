"use strict";
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle(color, height, width, length, weight) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
    return Vehicle;
}());
var myC = new Vehicle("Black", "4 Feet", 34, 10, "120 kg");
console.log(myC);
exports["default"] = Vehicle;
