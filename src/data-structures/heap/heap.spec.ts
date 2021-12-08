import { Heap } from './heap';
import { Comparator } from '../../util/types';

describe('Heap', () => {
  const minComparator: Comparator<number> = (a: number, b: number) => a > b;
  const maxComparator: Comparator<number> = (a: number, b: number) => a < b;
  const dataToBeSorted: number[] = [4, 6, -2, 1, 7, 9, 0, 123123, 5, 4];

  const sortedDataAsc: number[] = JSON.parse(JSON.stringify(dataToBeSorted));
  sortedDataAsc.sort((a, b) => (a > b ? 1 : -1));

  const sortedDataDesc: number[] = JSON.parse(JSON.stringify(dataToBeSorted));
  sortedDataDesc.sort((a, b) => (a > b ? -1 : 1));

  it('check peek', () => {
    const minHeap = new Heap<number>(minComparator);

    for (let i = 0; i < dataToBeSorted.length; i++) {
      minHeap.add(dataToBeSorted[i]);
    }

    expect(minHeap.peek()).toEqual(sortedDataAsc[0]);
  });

  it('check minHeap', () => {
    const minHeap = new Heap<number>(minComparator);

    for (let i = 0; i < dataToBeSorted.length; i++) {
      minHeap.add(dataToBeSorted[i]);
    }

    const ascSort: number[] = [];
    while (minHeap.size) {
      ascSort.push(minHeap.remove());
    }

    expect(ascSort).toEqual(sortedDataAsc);
  });

  it('check maxHeap', () => {
    const maxHeap = new Heap<number>(maxComparator);

    for (let i = 0; i < dataToBeSorted.length; i++) {
      maxHeap.add(dataToBeSorted[i]);
    }

    const descSort: number[] = [];
    while (maxHeap.size) {
      descSort.push(maxHeap.remove());
    }

    expect(descSort).toEqual(sortedDataDesc);
  });
});
