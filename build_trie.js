'use strict';

//  Function de create a trie
function buildTrie() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
}

// Execute the function
buildTrie('ae', 'ei', 'io', 'ou');
