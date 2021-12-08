import { Queue } from './queue';

describe('Queue', () => {
  const dataToBeAdded: number[] = [4, 6, -2, 1, 7, 9, 0, 123123, 5, 4];
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
    jest.clearAllMocks();
  });

  it('check peek', () => {
    expect(queue.peek()).toBeNull();

    for (let i = 0; i < dataToBeAdded.length; i++) {
      queue.add(dataToBeAdded[i]);
    }

    expect(queue.peek()).toEqual(dataToBeAdded[0]);
  });

  it('check add', () => {
    jest.spyOn(queue, 'add');
    for (let i = 0; i < dataToBeAdded.length; i++) {
      queue.add(dataToBeAdded[i]);
    }

    expect(queue.add).toHaveBeenCalledTimes(dataToBeAdded.length);
    expect(queue.size).toEqual(dataToBeAdded.length);
  });

  it('check remove', () => {
    jest.spyOn(queue, 'remove');
    for (let i = 0; i < dataToBeAdded.length; i++) {
      queue.add(dataToBeAdded[i]);
    }

    const dataToBeRetrieved = [];
    while (queue.size) {
      dataToBeRetrieved.push(queue.remove());
    }

    expect(queue.remove).toHaveBeenCalledTimes(dataToBeAdded.length);
    expect(queue.size).toEqual(0);
    expect(dataToBeRetrieved).toStrictEqual(dataToBeAdded);

    expect(queue.remove()).toBeNull();
  });
});
