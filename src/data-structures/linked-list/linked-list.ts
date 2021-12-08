class Node<T> {
  public val: T;
  public next: Node<T>;

  constructor(val: T) {
    this.val = val;
  }
}

export class LinkedList<T> {
  private first: Node<T>;
  private last: Node<T>;
  public size: number;

  constructor() {
    this.size = 0;
  }

  public add(val: T): Node<T> {
    const nextNode: Node<T> = new Node<T>(val);
    if (!this.first) {
      this.first = nextNode;
      this.last = this.first;
    } else {
      this.last.next = nextNode;
      this.last = nextNode;
    }
    this.size++;
    return this.first;
  }

  public removeAtIndex(i: number): T | null {
    let crtNode: Node<T> = this.first;
    let crtPos = 0;

    if (!this.first) return null;

    let retVal = null;
    if (i === 0) {
      retVal = this.first.val;
      this.first = this.first.next;
    } else {
      while (crtNode && crtPos < i - 1) {
        crtNode = crtNode.next;
        crtPos++;
      }
      if (crtNode?.next) {
        retVal = crtNode.next.val;
        crtNode.next = crtNode.next.next;
      }
      if (!crtNode.next) {
        this.last = crtNode;
      }
    }

    if (retVal !== null) {
      this.size--;
    }

    if (!this.first) this.last = null;

    return retVal;
  }

  public walk(): T[] {
    const walkedList: T[] = new Array<T>();
    let crtNode: Node<T> = this.first;
    while (crtNode) {
      walkedList.push(crtNode.val);
      crtNode = crtNode.next;
    }
    return walkedList;
  }
}
