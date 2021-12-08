export class Stack<T> {
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

  public push(node: T): void {
    this.data.push(node);
  }

  public pop(): T | null {
    return this.size > 0 ? this.data.pop() : null;
  }
}
