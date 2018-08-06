const PubSub = require("../helpers/pub_sub.js")

class CountOutput {
  constructor() {}

  static bindEvent(){
    PubSub.subscribe(`WordCounter:word-count`, (evt) => {
      const result = evt.detail;
      this.updateView(result);
    });
  }

  static updateView(result){
    const displayResult = document.getElementById('result');
    displayResult.textContent = result;
  };

};

module.exports = CountOutput;
