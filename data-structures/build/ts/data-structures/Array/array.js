"use strict";
var number = [];
for (var i = 1; i <= 20; i++) {
    number.push(i);
}
number.reverse();
function compare(a, b) {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
}
number.sort(compare);
console.log(number);
console.log("4" > "10");
console.log(number.find(function (item) {
    return item < 3;
}));
console.log(number.includes(10, 11));
function isEven(x) {
    return x % 2 === 0 ? true : false;
}
console.log(number.every(isEven));
console.log(number.some(isEven));
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var n = number_1[_i];
    console.log(n, "for of");
}
for (var n in number) {
    console.log(n, "for in");
}
console.log(number.toString(), "toString");
console.log(number.join("-,."), "join");
var friends = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Ana",
        age: 20,
    },
    {
        name: "Chris",
        age: 25,
    },
];
function comparePerson(a, b) {
}
