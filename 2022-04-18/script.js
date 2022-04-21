/*
  实现一个LazyMan，可以按照以下方式调用:
      LazyMan('Hank')输出:
      Hi! This is Hank!

      LazyMan('Hank').sleep(10).eat('dinner')输出
      Hi! This is Hank!
      //等待10秒..
      Wake up after 10
      Eat dinner~

      LazyMan('Hank').eat('dinner').eat('supper')输出
      Hi This is Hank!
      Eat dinner~
      Eat supper~
      LazyMan('Hank').eat('supper').sleepFirst(5)输出
      //等待5秒
      Wake up after 5
      Hi This is Hank!
      Eat supper
*/

class Man {
	_queue = [];
	name = 'someone';

	constructor(name) {
		this.name = name;
		this._sayHi();
	}

	_wait(second) {
		return new Promise((resolve) => setTimeout(resolve, second * 1000));
	}

	_sayHi() {
		this._queue.push(() => {
			console.log(`Hi This is ${this.name}!`);
		});

		return this;
	}

	async run() {
		let sequence = Promise.resolve();
		while (this._queue.length) {
			sequence = sequence.then(this._queue.shift());
		}

		return sequence;
	}

	eat(val) {
		this._queue.push(() => {
			console.log(`Eat ${val}`);
		});

		return this;
	}

	sleep(second) {
		this._queue.push(async () => {
			await this._wait(second);
			console.log(`Wake up after ${second}`);
		});

		return this;
	}

	sleepFirst(second) {
		this._queue.unshift(async () => {
			await this._wait(second);
			console.log(`Wake up after ${second}`);
		});

		return this;
	}
}

function LazyMan(name) {
	const lazyMan = new Man(name);

	setTimeout(() => {
		lazyMan.run();
	}, 0);

	return lazyMan;
}
