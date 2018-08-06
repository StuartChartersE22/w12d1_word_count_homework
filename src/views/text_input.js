const PubSub = require(`../helpers/pub_sub.js`);

class TextInput {
  constructor() {}

  static bindEvent(){
    const input = document.getElementById('wordcounter-form');
    input.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const text = evt.target.text.value;
      PubSub.publish(`TextInput:text`, text);
    });
  };

};

module.exports = TextInput;
