import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('check add', () => {
    const expectedList: number[] = [];
    for (let i = 0; i < 5; i++) {
      list.add(i);
      expectedList.push(i);
    }
    expect(list.size).toEqual(expectedList.length);
  });

  it('check walk', () => {
    const expectedList: number[] = [];
    for (let i = 0; i < 5; i++) {
      list.add(i);
      expectedList.push(i);
    }
    const actualList = list.walk();
    expect(actualList).toStrictEqual(expectedList);
  });

  it('check removeAtIndex', () => {
    for (let i = 0; i < 5; i++) {
      list.add(i);
    }
    const f = list.removeAtIndex(0);
    const l = list.removeAtIndex(3);
    expect(f).toEqual(0);
    expect(l).toEqual(4);

    let lastRemoved;
    while (list.size) {
      lastRemoved = list.removeAtIndex(0);
    }
    expect(list.removeAtIndex(0)).toBeNull();
    expect(lastRemoved).toEqual(3);
  });
});
