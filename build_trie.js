'use strict';

// Node
function NodeTree(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

// Tree
function Trie() {
  this.root = new NodeTree(null);
}

//  Method to insert the word in the node
Trie.prototype.add = function (word) {
  let node = this.root;

  // for every character in the word
  for (let i = 0; i < word.length; i++) {
    // check to see if character node exists.
    if (!node.children[word[i]]) {
      // if it doesn't exist, then create it.
      node.children[word[i]] = new NodeTree(word[i]);

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

Trie.prototype.search = function (word) {
  let node = this.root;
  let output = [];

  let keys = [];
  let newNode;
  let entrie = word[0];

  let temp = [];
  let trie = [];

  // for every character in the word
  for (let i = 0; i < word.length; i++) {
    // save a copy of the letter
    newNode = entrie;

    if (node.children[word[i]]) {
      // join with the next letter
      entrie = entrie + word[i + 1];
      // save in a temp array
      temp.push(entrie);
      // pass to the next node
      node = node.children[word[i]];
    } else {
      // there's none. just return it.
      return output;
    }
    // Save the temp kies in an array
    keys.push(array2Object([entrie], newNode));
  }

  // re asign the values of the each key in order
  for (let j = 0; j < keys.length; j++) {
    // obtain the key
    const key = Object.keys(keys[j]);
    // temporarily save the value
    const newElm = keys[j];
    //  verify if is the last letter
    newElm[key] = keys[j + 1] ? keys[j + 1] : null;
    trie[j] = newElm;
  }
  output = trie[0];

  return output;
};

//  Function to pass an array to an object
function array2Object(array, key) {
  return array.reduce((obj, item) => ({ ...obj, [key]: item }), {});
}

//  Function to create a trie
function buildTrie() {
  // console.log(arguments[1]);
  let trie = new Trie();
  if (!arguments[0]) {
    // return console.log({});
    return {};
  } else {
    for (let i = 0; i < arguments.length; i++) {
      // Determine if are there arguments
      const word = arguments[i];
      trie.add(word);
      // return console.log(trie.search(word));
      return trie.search(word);
    }
  }
}

// Execute the function
buildTrie('tree');
