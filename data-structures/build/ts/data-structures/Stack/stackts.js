"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = (function () {
    function Stack() {
        this.item = {};
        this.count = 0;
    }
    Stack.prototype.push = function (element) {
        this.item[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.item[this.count];
        delete this.item[this.count];
        return result;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.count - 1];
    };
    Stack.prototype.clear = function () {
        this.item = {};
        this.count = 0;
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.item[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + ", " + this.item[i];
        }
        return objString;
    };
    return Stack;
}());
exports.default = Stack;
var decimalToBinary = function (decNumber) {
    var binaryString = '';
    var number = decNumber;
    var stack = new Stack();
    while (number > 0) {
        var rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var baseConverter = function () { };
console.log(decimalToBinary(10));
