// Symbol不能使用new
// 接收一个字符串做参数，表示对Symbol的描述

const item = Symbol("stackItems");
interface Stack {
	items: number[];
}
class Stack {
	#items = [];
	#count = 0;
	push(item) {
		this.#items.push(item);
		this.#count += 1;
	}
	pop() {
		this.#items.pop();
		this.#count -= 1;
	}
	peek() {
		return this.#items[this.#items.length - 1];
	}
	isEmpty() {
		return this.#items.length === 0;
	}
	clear() {
		this.#items = [];
		this.#count = 0;
	}
}

const stack = new Stack();
stack.push(1);
console.log(stack.isEmpty());
