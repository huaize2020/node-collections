import Stack from '../index';

describe('Stack', () => {
  it('should work', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);

    // peek size not change
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);

    // peek size not change
    expect(stack.peek()).toBe(1);
    expect(stack.size()).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);

    expect(stack.pop()).toBeUndefined();
  });
});
