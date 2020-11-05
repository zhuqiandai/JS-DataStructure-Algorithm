"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var linked_list_models_1 = require("../models/linked-list-models");
var LinkedList = (function () {
    function LinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = utils_1.defaultEquals; }
        this.equalsFn = equalsFn;
        this.count = 0;
    }
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.getElementAt = function (index) {
        if (index > 0 && index < this.count) {
            var node = this.head;
            for (var i = 0; i < index && node !== null; i++) {
                node = node === null || node === void 0 ? void 0 : node.next;
            }
            return node;
        }
        return undefined;
    };
    LinkedList.prototype.indexOf = function () { };
    LinkedList.prototype.push = function (element) {
        var node = new linked_list_models_1.Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    LinkedList.prototype.insert = function () { };
    LinkedList.prototype.remove = function () { };
    LinkedList.prototype.removeAt = function (index) {
        if (index > 0 && index < this.count) {
        }
        return undefined;
    };
    LinkedList.prototype.clear = function () { };
    LinkedList.prototype.toString = function () { };
    return LinkedList;
}());
exports.default = LinkedList;
var list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
