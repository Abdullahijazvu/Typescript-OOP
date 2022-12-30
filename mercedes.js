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
var index_js_1 = require("./index.js");
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(color, height, width, length, weight, wheels, make, model) {
        var _this = _super.call(this, color, height, width, length, weight) || this;
        _this.wheels = wheels;
        _this.make = make;
        _this.model = model;
        return _this;
    }
    Mercedes.prototype.power = function (state) {
        if (state === true) {
            console.log("Start the Car");
            return "Start the Car";
        }
        else {
            console.log("Try again");
            return "Unable to start";
        }
    };
    Mercedes.prototype.speed = function (state) {
        if (state === true) {
            console.log("Speed is Good");
            return "Speed is Good";
        }
        else {
            console.log("Speed to much low");
            return "Speed to much low";
        }
    };
    return Mercedes;
}(index_js_1["default"]));
var myB = new Mercedes("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022);
myB.power(true);
myB.speed(true);
console.log(myB);
exports["default"] = Mercedes;
