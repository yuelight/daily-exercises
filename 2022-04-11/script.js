// link https://bigfrontend.dev/zh/problem/create-an-Event-Emitter

// please complete the implementation
class EventEmitter {
	listeners = new Map();

	subscribe(eventName, callback) {
		const callbacks = this.listeners.get(eventName) || [];
		callbacks.push(callback);
		this.listeners.set(eventName, callbacks);

		return {
			release: () => {
				const callbacks = this.listeners.get(eventName) || [];
				callbacks.splice(callbacks.indexOf(callback), 1);

				this.listeners.set(eventName, callbacks);
			},
		};
	}

	emit(eventName, ...args) {
		const callbacks = this.listeners.get(eventName) || [];
		callbacks.forEach((cb) => {
			cb(...args);
		});
	}
}
