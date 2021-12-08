const processStartTime = process.hrtime();

import { LinkedList, Heap, Trie } from './src/data-structures';
import { Comparator } from './src/util/types';

console.log('===========TRIE===========');
const trie = new Trie();
const words = ['geek', 'geeks', 'algorithm', 'force'];
for (const word of words) {
  trie.insert(word);
}
console.log(`Trie words: ${words.join()}`);
const trieSearchWords = ['geek', 'ee', 'force'];
for (const searchWord of trieSearchWords) {
  console.log(`Trie search: ${searchWord}: ${trie.search(searchWord)}`);
}

console.log();
console.log('SuffixTree using a simple Trie');
const suffixTree = new Trie();
const haystack = 'geeksforgeeks.org';
const needles = ['ee', 'geek', 'quiz', 'forgeeks'];
const len = haystack.length;
for (let i = 0; i < len; i++) {
  suffixTree.insertSuffix(haystack.substr(i), i);
}
for (const needle of needles) {
  const patternFound = suffixTree.searchPrefix(needle);
  if (patternFound.length) {
    console.log(
      `Pattern (${needle}) found on positions: ${patternFound
        .map((pos) => pos - needle.length)
        .join()}`,
    );
  } else {
    console.log(`Pattern (${needle}) not found`);
  }
}
console.log();

console.log('===========MIN/MAX HEAPS===========');
const minComparator: Comparator<number> = (a: number, b: number) => a > b;
const maxComparator: Comparator<number> = (a: number, b: number) => a < b;

const minHeap = new Heap(minComparator);
const maxHeap = new Heap(maxComparator);

const dataToBeSorted = [4, 6, -2, 1, 7, 9];
for (let i = 0; i < dataToBeSorted.length; i++) {
  minHeap.add(dataToBeSorted[i]);
  maxHeap.add(dataToBeSorted[i]);
}

const ascSort: number[] = [];
const descSort: number[] = [];

while (minHeap.size) {
  ascSort.push(minHeap.remove());
}
while (maxHeap.size) {
  descSort.push(maxHeap.remove());
}

console.log(`Data to be sorted: ${dataToBeSorted}`);
console.log(`Sorted data using minHeap: ${ascSort}`);
console.log(`Sorted data using maxHeap: ${descSort}`);
console.log();

console.log('===========LINKED LISTS===========');
const list: LinkedList<number> = new LinkedList<number>();
for (let i = 0; i < 5; i++) {
  list.add(i);
}
console.log(`List: ${list.walk()}; ${list.size} elements`);
console.log(
  'removing at 0: ',
  list.removeAtIndex(0),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 2: ',
  list.removeAtIndex(2),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 2: ',
  list.removeAtIndex(2),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 2: ',
  list.removeAtIndex(2),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 1: ',
  list.removeAtIndex(1),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 0: ',
  list.removeAtIndex(0),
  'size: ',
  list.size,
  list.walk(),
);
console.log(
  'removing at 0: ',
  list.removeAtIndex(0),
  'size: ',
  list.size,
  list.walk(),
);
console.log();

const processEndTime = process.hrtime(processStartTime);
console.info(
  'Execution time: %ds %dms',
  processEndTime[0],
  processEndTime[1] / 1000000,
);
