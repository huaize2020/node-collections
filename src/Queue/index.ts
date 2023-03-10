export default class Queue<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  enqueue(value: T) {
    this.data.push(value);
  }

  dequeue(): T | undefined {
    if (this.size() === 0) return;
    return this.data.shift();
  }

  peek(): T {
    return this.data[0];
  }

  size(): number {
    return this.data.length;
  }
}
