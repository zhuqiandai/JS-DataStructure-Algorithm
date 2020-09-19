export default class Stack<StackProps> {
	private item: any;
	private count: number;

	constructor() {
		this.item = {};
		this.count = 0;
	}
	push(element: StackProps) {
		this.item[this.count] = element;
		this.count++;
	}
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.item[this.count];
		delete this.item[this.count];
		return result;
	}
	isEmpty() {
		return this.count === 0;
	}
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.item[this.count - 1];
	}
	clear() {
		this.item = {};
		this.count = 0;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.item[0]}`;
		for (let i = 1; i < this.count; i++) {
			objString = `${objString}, ${this.item[i]}`;
		}
		return objString;
	}
}

// 二进制 --> 十进制
const decimalToBinary = (decNumber: number): string => {
	let binaryString = '';
	let number = decNumber;
	const stack = new Stack();
	while (number > 0) {
		const rem = Math.floor(number % 2);
		stack.push(rem);
		number = Math.floor(number / 2);
	}
	while (!stack.isEmpty()) {
		binaryString += stack.pop().toString();
	}
	return binaryString;
};

// 进制转换
const baseConverter = () => {};

console.log(decimalToBinary(10));
