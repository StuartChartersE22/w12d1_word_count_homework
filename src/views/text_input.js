const PubSub = require(`../helpers/pub_sub.js`);

class TextInput {
  constructor() {}

  static bindEvent(){
    const input = document.getElementById('wordcounter-form');
    input.addEventListener('input', (evt) => {
      const text = evt.target.value;
      PubSub.publish(`TextInput:text`, text);
    });
  };

};

module.exports = TextInput;
