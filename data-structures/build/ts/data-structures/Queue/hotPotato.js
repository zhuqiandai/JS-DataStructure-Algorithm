"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = __importDefault(require("./queue"));
var hotPotato = function (allUserList, nums) {
    var queue = new queue_1.default();
    var failedUserList = [];
    for (var i = 0; i < allUserList.length; i++) {
        queue.enqueue(allUserList[i]);
    }
    while (queue.size() > 1) {
        for (var i = 0; i < nums; i++) {
            queue.enqueue(queue.dequeue());
        }
        failedUserList.push(queue.dequeue());
    }
    return {
        faildUserList: failedUserList,
        winner: queue.dequeue(),
    };
};
var names = ['Jack', 'Carl', 'John', 'Ingrid', 'Camila'];
var result = hotPotato(names, 7);
result.faildUserList.forEach(function (name) {
    console.log(name + "\u5728\u51FB\u9F13\u4F20\u82B1\u4E2D\u88AB\u6DD8\u6C70");
});
console.log("\u80DC\u5229\u8005\uFF1A " + result.winner);
