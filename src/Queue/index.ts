export default class Queue<T> {
  private list: T[];
  private length: number;

  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value: T) {
    this.length++;
    this.list.push(value);
  }

  dequeue(): T | undefined {
    if (this.length === 0) return;

    this.length--;
    return this.list.shift();
  }

  peek(): T {
    return this.list[0];
  }
}
