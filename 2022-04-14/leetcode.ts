// link https://leetcode-cn.com/problems/lru-cache/
// 146. LRU 缓存

class CacheNode {
	tail: CacheNode;
	val: number;
	key: number;
	next: CacheNode;
}

class LRUCache {
	capacity: number;
	rootNode: CacheNode;
	cacheMap: Map<number, CacheNode>;
	constructor(capacity: number) {
		this.capacity = capacity;
		this.cacheMap = new Map();
		this.rootNode = new CacheNode();
		this.rootNode.next = this.rootNode;
		this.rootNode.tail = this.rootNode;
	}

	get(key: number): number {
		if (!this.cacheMap.has(key)) {
			return -1;
		}

		const _node = this.cacheMap.get(key)!;
		this.moveToHead(_node);
		return _node.val;
	}

	put(key: number, value: number): void {
		if (this.cacheMap.has(key)) {
			const _node = this.cacheMap.get(key)!;
			_node.val = value;
			this.moveToHead(_node);
			return;
		}

		if (this.cacheMap.size === this.capacity) {
			const lastNode = this.rootNode.tail;

			this.cacheMap.delete(lastNode.key);
			this.removeFromNode(lastNode);
		}

		const _node = new CacheNode();
		_node.val = value;
		_node.key = key;
		this.insertToHeadNode(_node);
		this.cacheMap.set(key, _node);
	}

	moveToHead(_node: CacheNode) {
		if (this.rootNode.next === _node) {
			return;
		}

		this.removeFromNode(_node);
		this.insertToHeadNode(_node);
	}

	removeFromNode(_node: CacheNode) {
		_node.next.tail = _node.tail;
		_node.tail.next = _node.next;
	}

	insertToHeadNode(_node: CacheNode) {
		_node.next = this.rootNode.next;
		this.rootNode.next.tail = _node;
		this.rootNode.next = _node;
		_node.tail = this.rootNode;
	}
}
