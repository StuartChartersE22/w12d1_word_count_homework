const TextInput = require("./views/text_input.js");
const WordCounter = require("./models/word_counter.js");
const CountOutput = require("./views/count_output.js")

document.addEventListener('DOMContentLoaded', () => {

  TextInput.bindEvent();
  WordCounter.bindEvent();
  CountOutput.bindEvent();

});
