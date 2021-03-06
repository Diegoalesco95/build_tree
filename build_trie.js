'use strict';

class Trie {
  constructor() {
    this.root = {};
  }

  //  Method to insert a word in the node
  add(node, word, index) {
    if (word) {
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
      return node[word.slice(0, index + 1)];
    } else {
      return {};
    }
  }

  // Method to search all words in the tree
  searchAll() {
    let node = this.root;
    console.log(node);
    return node;
  }
}

//  Function to create a trie
function buildTrie() {
  const trie = new Trie();
  let node = trie.root;

  // Determine if are there arguments
  for (let argument of arguments) {
    // Add wach word to the trie
    trie.add(node, argument, 0);
  }
  return trie.searchAll();
}

// Execute the function
// buildTrie();
// buildTrie('');
// buildTrie('tri');
// buildTrie('tree');
// buildTrie('A', 'to', 'tea', 'ted', 'ten', 'i', 'in', 'inn');
// buildTrie('true', 'trust');
// buildTrie('true', 'trUe', 'truE', 'True');
