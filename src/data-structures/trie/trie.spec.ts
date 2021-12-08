import { Trie } from './trie';

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('checks insert', () => {
    trie.insert('mud');
    trie.insert('mug');
    trie.insert('pug');
    expect(Object.keys(trie.map).length).toEqual(2); // 'm', 'p'
    expect(trie.map['m']).toBeDefined();
    expect(trie.map['p']).toBeDefined();
    expect(trie.map['m'].map['u']).toBeDefined();
  });

  it('checks search', () => {
    trie.insert('mud');
    trie.insert('mug');
    expect(trie.search('mud')).toEqual(true);
    expect(trie.search('mug')).toEqual(true);
    expect(trie.search('pug')).toEqual(false);
  });

  it('checks insertSuffix', () => {
    const haystack = 'geeksforgeeks.org';
    const len = haystack.length;
    for (let i = 0; i < len; i++) {
      trie.insertSuffix(haystack.substr(i), i);
    }
    expect(trie.map['g'].indexes).toEqual([1, 9, 17]);
  });

  it('checks searchPrefix', () => {
    const haystack = 'geeksforgeeks.org';
    const needles = ['ee', 'geek', 'quiz', 'forgeeks'];
    const len = haystack.length;
    for (let i = 0; i < len; i++) {
      trie.insertSuffix(haystack.substr(i), i);
    }

    expect(
      trie.searchPrefix(needles[0]).map((pos) => pos - needles[0].length),
    ).toEqual([1, 9]);
    expect(
      trie.searchPrefix(needles[1]).map((pos) => pos - needles[1].length),
    ).toEqual([0, 8]);
    expect(
      trie.searchPrefix(needles[2]).map((pos) => pos - needles[2].length),
    ).toEqual([]);
    expect(
      trie.searchPrefix(needles[3]).map((pos) => pos - needles[3].length),
    ).toEqual([5]);
  });
});
