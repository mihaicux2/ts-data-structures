import { Comparator } from '../../util/types';

export class Heap<T> {
  private heap: T[];
  private cmp: Comparator<T>;

  constructor(cmp: Comparator<T>) {
    this.cmp = cmp;
    this.heap = [];
  }

  public get size(): number {
    return this.heap.length;
  }

  public peek(): T {
    return this.heap[0];
  }

  public add(node: T): void {
    this.heap.push(node);
    this.heapifyUp(this.size - 1);
  }

  public remove(): T {
    const top: T = this.heap[0];
    this.swap(this.heap, 0, this.size - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return top;
  }

  private heapifyUp(i: number): void {
    const parentIdx = this.getParentIdx(i);
    if (parentIdx !== null && this.cmp(this.heap[parentIdx], this.heap[i])) {
      this.swap(this.heap, i, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(i: number): void {
    const leftChildIdx = this.getLeftChildIdx(i);
    const rightChildIdx = this.getRightChildIdx(i);
    let lowest: number = i;

    if (
      leftChildIdx !== null &&
      this.cmp(this.heap[lowest], this.heap[leftChildIdx])
    ) {
      lowest = leftChildIdx;
    }
    if (
      rightChildIdx !== null &&
      this.cmp(this.heap[lowest], this.heap[rightChildIdx])
    ) {
      lowest = rightChildIdx;
    }
    if (lowest !== i) {
      this.swap(this.heap, i, lowest);
      this.heapifyDown(lowest);
    }
  }

  private swap(items: T[], i: number, j: number): void {
    const tmp: T = items[i];
    items[i] = items[j];
    items[j] = tmp;
  }

  private getParentIdx(i: number): number | null {
    return i > 0 ? Math.floor(i / 2) : null;
  }

  private getLeftChildIdx(i: number): number | null {
    const leftChildIdx: number = i * 2 + 1;
    return leftChildIdx < this.size ? leftChildIdx : null;
  }

  private getRightChildIdx(i: number): number | null {
    const rightChildIdx: number = i * 2 + 2;
    return rightChildIdx < this.size ? rightChildIdx : null;
  }
}
