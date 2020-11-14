'use strict';

// Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

// Tree
function Trie() {
  this.root = new Node(null);
}

//  Method to insert the word in the node
Trie.prototype.add = function (word) {
  let node = this.root;

  // for every character in the word
  for (let i = 0; i < word.length; i++) {
    // check to see if character node exists.
    if (!node.children[word[i]]) {
      // if it doesn't exist, then create it.
      node.children[word[i]] = new Node(word[i]);

      // assign the parent.
      node.children[word[i]].parent = node;
    }

    // proceed to the next depth in the trie.
    node = node.children[word[i]];

    // finally, check to see if is the end.
    if (i == word.length - 1) {
      // change the end flag to true.
      node.end = true;
    }
  }
};

//  Function to pass an array to an object
function array2Object(array, key) {
  return array.reduce((obj, item) => ({ ...obj, [key]: item }), {});
}

//  Function to create a trie
function buildTrie() {
  // Determine if there are arguments
  if (!arguments[0]) {
    return console.log({});
  } else {
    let trie = [];
    for (let i = 0; i < arguments.length; i += 1) {
      const word = arguments[i];
      for (let j = 0; j < word.length; j += 1) {
        trie.push(word.charAt(j));
      }
    }
    console.log(array2Object(trie));
  }
}

// Execute the function
buildTrie('');
