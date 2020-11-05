/*
 * @Author: your name
 * @Date: 2020-09-19 15:59:12
 * @Description: 击鼓传花
 * @FilePath: /data-structures/src/ts/data-structures/Queue/hotPotato.ts
 */

import Queue from './queue';

interface HotPotato<QueueEle> {
	faildUserList: QueueEle[];
	winner: QueueEle;
}

const hotPotato = (allUserList: string[], nums: number): HotPotato<string> => {
	const queue = new Queue();
	const failedUserList = [];

	for (let i = 0; i < allUserList.length; i++) {
		queue.enqueue(allUserList[i]);
	}

	while (queue.size() > 1) {
		for (let i = 0; i < nums; i++) {
			queue.enqueue(queue.dequeue());
		}
		failedUserList.push(queue.dequeue());
	}

	return {
		faildUserList: failedUserList,
		winner: queue.dequeue(),
	};
};

const names = ['Jack', 'Carl', 'John', 'Ingrid', 'Camila'];
const result = hotPotato(names, 7);
result.faildUserList.forEach((name) => {
	console.log(`${name}在击鼓传花中被淘汰`);
});

console.log(`胜利者： ${result.winner}`);
