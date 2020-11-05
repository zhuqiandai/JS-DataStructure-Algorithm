import DoubleQueue from './double-ended-queue';

const palindromeChecker = (word: string) => {
	if (word === undefined || word === null) {
		return false;
	}
	const doubelQueue = new DoubleQueue();
	const lowerWord = word.toLocaleLowerCase().split(' ').join('');

	console.log(lowerWord);
	for (let i = 0; i < lowerWord.length; i++) {
		doubelQueue.addBack(lowerWord.charAt(i));
	}
	let isEqual = true;
	let firstChar, lastChar;

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
