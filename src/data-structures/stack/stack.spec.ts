import { Stack } from './stack';

describe('Stack', () => {
  const dataToBeAdded: number[] = [4, 6, -2, 1, 7, 9, 0, 123123, 5, 4];
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
    jest.clearAllMocks();
  });

  it('check peek', () => {
    expect(stack.peek()).toBeNull();

    for (let i = 0; i < dataToBeAdded.length; i++) {
      stack.push(dataToBeAdded[i]);
    }

    expect(stack.peek()).toEqual(dataToBeAdded[dataToBeAdded.length - 1]);
  });

  it('check push', () => {
    jest.spyOn(stack, 'push');
    for (let i = 0; i < dataToBeAdded.length; i++) {
      stack.push(dataToBeAdded[i]);
    }

    expect(stack.push).toHaveBeenCalledTimes(dataToBeAdded.length);
    expect(stack.size).toEqual(dataToBeAdded.length);
  });

  it('check pop', () => {
    jest.spyOn(stack, 'pop');
    for (let i = 0; i < dataToBeAdded.length; i++) {
      stack.push(dataToBeAdded[i]);
    }

    const dataToBeRetrieved = [];
    while (stack.size) {
      dataToBeRetrieved.push(stack.pop());
    }

    expect(stack.pop).toHaveBeenCalledTimes(dataToBeAdded.length);
    expect(stack.size).toEqual(0);
    expect(dataToBeRetrieved).toStrictEqual(dataToBeAdded.reverse());

    expect(stack.pop()).toBeNull();
  });
});
