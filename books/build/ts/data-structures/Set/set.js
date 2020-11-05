"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
var Set = (function () {
    function Set() {
        this.items = {};
    }
    Set.prototype.add = function (element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    };
    Set.prototype.delete = function (element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    };
    Set.prototype.has = function (element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    };
    Set.prototype.clear = function () {
        this.items = {};
    };
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    Set.prototype.values = function () {
        var values = [];
        for (var item in this.items) {
            if (this.items.hasOwnPorperty(item)) {
                values.push(item);
            }
        }
        return values;
    };
    return Set;
}());
exports.Set = Set;
