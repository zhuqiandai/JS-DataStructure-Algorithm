export default class Queue<QueueEle> {
	private items: any;
	private count: number;
	private lowestCount: number;

	constructor() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	enqueue(element: QueueEle) {
		this.items[this.count] = element;
		this.count++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.count - this.lowestCount;
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
	}

	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; i++) {
			objString = `${objString}, ${this.items[i]}`;
		}
		return objString;
	}
}

// const queue = new Queue();
// queue.enqueue(123);
// console.log(queue);
// queue.enqueue('Jack');
// console.log(queue);
// queue.dequeue();
// console.log(queue);
// queue.enqueue('element');
// console.log(queue.size());
// console.log(queue.toString());
