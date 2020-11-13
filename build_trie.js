'use strict';

//  Function to pass an array to an object
function array2Object(array, key) {
  return array.reduce((obj, item) => ({ ...obj, [item]: item }), {});
}

//  Function to create a trie
function buildTrie() {
  let trie = [];
  for (let i = 0; i < arguments.length; i += 1) {
    const word = arguments[i];
    for (let j = 0; j < word.length; j += 1) {
      trie.push(word.charAt(j));
    }
  }
  console.log(array2Object(trie));
}

// Execute the function
buildTrie('trust');
