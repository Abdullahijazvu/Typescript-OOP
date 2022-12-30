"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mercedes_js_1 = require("./mercedes.js");
var Coupe = /** @class */ (function (_super) {
    __extends(Coupe, _super);
    function Coupe(color, height, width, length, weight, wheels, make, model, price) {
        var _this = _super.call(this, color, height, width, length, weight, wheels, make, model) || this;
        _this.price = price;
        return _this;
    }
    return Coupe;
}(mercedes_js_1["default"]));
var myBCD = new Coupe("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022, "$5000");
console.log(myBCD);
