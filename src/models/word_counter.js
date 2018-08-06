const PubSub = require(`../helpers/pub_sub.js`)

class WordCounter {
  constructor() {}

  static numberOfWords(text){
    const wordArray = text.split(" ");
    return wordArray.length;
  };

  static bindEvent(){
    PubSub.subscribe(`TextInput:text`, (evt) => {
      const text = evt.detail;
      const result = this.numberOfWords(text);
      PubSub.publish(`WordCounter:word-count`, result);
    });
  };

}

module.exports = WordCounter;
