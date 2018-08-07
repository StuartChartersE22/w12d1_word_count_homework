const PubSub = require(`../helpers/pub_sub.js`)
const WordVerifier = require(`../helpers/word_verifier.js`)

class WordCounter {
  constructor() {}

  static numberOfWords(text){
    const textArray = text.split(" ");
    const wordArray = textArray.filter((entry) => {
      return WordVerifier.isWord(entry);
    });
    return wordArray.length;
  };

  static bindEvents(){
    PubSub.subscribe(`TextInput:text`, (evt) => {
      const text = evt.detail;
      const result = this.numberOfWords(text);
      PubSub.publish(`WordCounter:word-count`, result);
    });
  };

}

module.exports = WordCounter;
