import { Comparator } from '../../util/types';
import { BinaryTree } from './binary-tree';

describe('BinaryTree', () => {
  const comparator: Comparator<number> = (a: number, b: number) => a < b;
  let binTree: BinaryTree<number>;
  let emptyBinTree: BinaryTree<number>;
  let dataToBeAdded: number[];
  let inord: number[];
  let preord: number[];
  let postord: number[];
  let BFS: number[];

  beforeAll(() => {
    binTree = new BinaryTree<number>(comparator);
    emptyBinTree = new BinaryTree<number>(comparator);
    dataToBeAdded = [4, 6, -2, 1, 7, 9, 0, 123123, 5, 4];
    inord = [-2, 0, 1, 4, 4, 5, 6, 7, 9, 123123];
    preord = [4, -2, 1, 0, 6, 5, 4, 7, 9, 123123];
    postord = [0, 1, -2, 4, 5, 123123, 9, 7, 6, 4];
    BFS = [4, -2, 6, 1, 5, 7, 0, 4, 9, 123123];

    dataToBeAdded.forEach((val) => {
      binTree.insert(val);
    });
  });

  it('check empty', () => {
    expect(emptyBinTree.search(44)).toEqual(false);
    expect(emptyBinTree.inord()).toEqual([]);
    expect(emptyBinTree.preord()).toEqual([]);
    expect(emptyBinTree.postord()).toEqual([]);
    expect(emptyBinTree.BFS()).toEqual([]);
  });

  it('check search', () => {
    expect(binTree.search(6)).toEqual(true);
    expect(binTree.search(123125)).toEqual(false);
    expect(binTree.search(-2)).toEqual(true);
    expect(binTree.search(44)).toEqual(false);
  });

  it('check inord', () => {
    expect(binTree.inord()).toStrictEqual(inord);
  });

  it('check preord', () => {
    expect(binTree.preord()).toStrictEqual(preord);
  });

  it('check postord', () => {
    expect(binTree.postord()).toStrictEqual(postord);
  });

  it('check BFS', () => {
    expect(binTree.BFS()).toStrictEqual(BFS);
  });
});
