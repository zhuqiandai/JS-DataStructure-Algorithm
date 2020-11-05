"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var double_ended_queue_1 = __importDefault(require("./double-ended-queue"));
var palindromeChecker = function (word) {
    if (word === undefined || word === null) {
        return false;
    }
    var doubelQueue = new double_ended_queue_1.default();
    var lowerWord = word.toLocaleLowerCase().split(' ').join('');
    console.log(lowerWord);
    for (var i = 0; i < lowerWord.length; i++) {
        doubelQueue.addBack(lowerWord.charAt(i));
    }
    var isEqual = true;
    var firstChar, lastChar;
    while (doubelQueue.size() > 1 && isEqual) {
        firstChar = doubelQueue.removeFront();
        lastChar = doubelQueue.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
};
console.log(palindromeChecker('a'));
console.log(palindromeChecker('kayak'));
console.log(palindromeChecker('number is none'));
console.log(palindromeChecker('nottalln'));
console.log(palindromeChecker('was ......... saw'));
