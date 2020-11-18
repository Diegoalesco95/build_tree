'use strict';

class Trie {
  constructor() {
    this.root = {};
  }

  //  Method to insert a word in the node
  add(node, word, index) {
    // Verify if is the end of the word
    if (index === word.length - 1) {
      // return null as value of the last node
      return (node[word.slice(0, index + 1)] = null);
    } else {
      // Verify if the node not contain a value
      if (!node[word.slice(0, index + 1)]) {
        // if there is no value, assign one.
        node[word.slice(0, index + 1)] = {};
      }
      // Run recursively until reaching the end of the word
      this.add(node[word.slice(0, index + 1)], word, index + 1);
    }
    console.log(node);
    return node[word.slice(0, index + 1)];
  }
}

//  Function to create a trie
function buildTrie() {
  const trie = new Trie();
  let node = trie.root;

  // Determine if are there arguments
  if (!arguments[0]) {
    console.log({});
    return {};
  } else {
    for (let i = 0; i < arguments.length; i++) {
      const word = arguments[i];

      // Add wach word to the trie
      trie.add(node, word, 0);
    }
  }
}

// Execute the function
buildTrie('tree');
