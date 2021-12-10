import { Queue } from '..';
import { Comparator } from '../../util/types';

class Node<T> {
  public value: T;
  public left: Node<T>;
  public right: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinaryTree<T> {
  public root: Node<T>;
  private cmp: Comparator<T>;

  constructor(cmp: Comparator<T>) {
    this.cmp = cmp;
  }

  public insert(value: T): void {
    const insertNode: Node<T> = new Node<T>(value);
    if (!this.root) {
      this.root = new Node<T>(value);
    } else {
      this._insert(this.root, insertNode);
    }
  }

  public search(value: T): boolean {
    return this._search(this.root, value);
  }

  public inord(): Array<T> {
    return this._inord(this.root, []);
  }

  public preord(): Array<T> {
    return this._preord(this.root, []);
  }

  public postord(): Array<T> {
    return this._postord(this.root, []);
  }

  public BFS(): Array<T> {
    if (!this.root) return [];

    const path: Array<T> = new Array<T>();
    const q: Queue<Node<T>> = new Queue<Node<T>>();
    q.add(this.root);
    while (q.size) {
      const node = q.remove();
      path.push(node.value);
      if (node.left) {
        q.add(node.left);
      }
      if (node.right) {
        q.add(node.right);
      }
    }
    return path;
  }

  private _preord(node: Node<T>, path: Array<T>): Array<T> {
    if (!node) return [];
    path.push(node.value);
    if (node.left) {
      this._preord(node.left, path);
    }
    if (node.right) {
      this._preord(node.right, path);
    }
    return path;
  }

  private _inord(node: Node<T>, path: Array<T>): Array<T> {
    if (!node) return [];
    if (node.left) {
      this._inord(node.left, path);
    }
    path.push(node.value);
    if (node.right) {
      this._inord(node.right, path);
    }
    return path;
  }

  private _postord(node: Node<T>, path: Array<T>): Array<T> {
    if (!node) return [];
    if (node.left) {
      this._postord(node.left, path);
    }
    if (node.right) {
      this._postord(node.right, path);
    }
    path.push(node.value);
    return path;
  }

  private _search(node: Node<T>, value: T): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    if (this.cmp(value, node.value)) {
      return node.left ? this._search(node.left, value) : false;
    } else {
      return node.right ? this._search(node.right, value) : false;
    }
  }

  private _insert(node: Node<T>, insertNode: Node<T>): void {
    if (this.cmp(insertNode.value, node.value)) {
      if (node.left) {
        this._insert(node.left, insertNode);
      } else {
        node.left = insertNode;
      }
    } else {
      if (node.right) {
        this._insert(node.right, insertNode);
      } else {
        node.right = insertNode;
      }
    }
  }
}
