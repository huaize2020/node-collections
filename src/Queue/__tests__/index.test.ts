import Queue from '../index';

describe('Queue', () => {
  it('should work', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    // peek size not change
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(1);

    // peek size not change
    expect(queue.peek()).toBe(2);
    expect(queue.size()).toBe(1);

    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(0);

    expect(queue.dequeue()).toBeUndefined();
  });
});
