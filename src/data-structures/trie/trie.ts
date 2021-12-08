export class Trie {
  public map: Record<string, Trie>;
  public isWord: boolean;
  public indexes: number[];

  constructor() {
    this.map = {};
    this.isWord = false;
    this.indexes = [];
  }

  public insert(word: string): void {
    this.add(word, 0, this);
  }

  public insertSuffix(word: string, idx: number): void {
    this.addSuffix(word, 0, this, idx);
  }

  public searchPrefix(word: string): number[] {
    if (!word.length) return this.indexes;
    const char = word.charAt(0);
    if (this.map[char]) {
      return this.map[char].searchPrefix(word.substr(1));
    }
    return [];
  }

  public search(word: string): boolean {
    return this.find(word, 0, this);
  }

  private addSuffix(word: string, i: number, trie: Trie, idx: number): void {
    trie.indexes.push(idx);
    if (word.length) {
      const char = word.charAt(0);
      if (!trie.map[char]) {
        trie.map[char] = new Trie();
      }
      trie.map[char].addSuffix(word.substr(1), i + 1, trie.map[char], idx + 1);
    }
  }

  private add(word: string, i: number, trie: Trie): void {
    if (i === word.length) {
      trie.isWord = true;
      return;
    }
    const char = word.charAt(i);
    if (!trie.map[char]) {
      trie.map[char] = new Trie();
    }
    this.add(word, i + 1, trie.map[char]);
  }

  private find(word: string, i: number, trie: Trie): boolean {
    if (!word.length) {
      return trie.isWord;
    }
    const char = word.charAt(0);
    if (trie.map[char]) {
      return this.find(word.substr(1), i + 1, trie.map[char]);
    }
    return false;
  }
}
