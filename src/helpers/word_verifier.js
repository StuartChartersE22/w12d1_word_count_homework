class WordVerifier {
  constructor() {}

  static isWord(word){
    word.toLowerCase();
    const requirement = /[a-z]/;
    return requirement.test(word);
  };

}

module.exports = WordVerifier;
