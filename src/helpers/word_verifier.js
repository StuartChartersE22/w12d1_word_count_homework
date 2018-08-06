class WordVerifier {
  constructor() {}

  static isWord(word){
    const requirement = /[a-z]/;
    return requirement.test(word);
  };

}

module.exports = WordVerifier;
