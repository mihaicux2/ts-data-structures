export class Queue<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  public get size(): number {
    return this.data.length;
  }

  public peek(): T | null {
    return this.size > 0 ? this.data[0] : null;
  }

  public add(node: T): void {
    this.data.push(node);
  }

  public remove(): T | null {
    return this.size > 0 ? this.data.shift() : null;
  }
}
