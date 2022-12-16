export default class Stack<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  push(value: T) {
    this.data.push(value);
  }

  pop(): T | undefined {
    if (this.size() === 0) return;
    return this.data.pop();
  }

  peek(): T {
    return this.data[this.size() - 1];
  }

  size(): number {
    return this.data.length;
  }
}
