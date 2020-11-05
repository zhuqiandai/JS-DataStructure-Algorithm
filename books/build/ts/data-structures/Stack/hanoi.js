"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanoi = void 0;
var stackts_1 = __importDefault(require("./stackts"));
var towerOfHanoi = function (plates, source, helper, dest, sourceName, helperName, destName, moves) {
    if (moves === void 0) { moves = []; }
    if (plates < 0) {
        return moves;
    }
    if (plates === 1) {
        dest.push(source.pop());
        var move = {};
        move[sourceName] = source.toString();
        move[helperName] = source.toString();
        move[destName] = source.toString();
        moves.push(move);
    }
    else {
        towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
        dest.push(source.pop());
        var move = {};
        move[sourceName] = source.toString();
        move[helperName] = helper.toString();
        move[destName] = dest.toString();
        moves.push(move);
        towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
    }
    return moves;
};
function hanoi(plates) {
    var source = new stackts_1.default();
    var helper = new stackts_1.default();
    var dest = new stackts_1.default();
    for (var i = plates; i > 0; i--) {
        source.push(i);
    }
    return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}
exports.hanoi = hanoi;
console.log(hanoi(4));
