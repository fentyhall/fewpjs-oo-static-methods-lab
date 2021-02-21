class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']/g, '');
  }

  static titleize(sentence) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let finalSentence = [];
    let splitSentence = sentence.split(' ');

    for (let i = 0; i < splitSentence.length; i++) {
      if (i === 0) {
        finalSentence.push(this.capitalize(splitSentence[i]));
      } else {
        if (words.includes(splitSentence[i])) {
          finalSentence.push(splitSentence[i]);
        } else {
          finalSentence.push(this.capitalize(splitSentence[i]));
        }
      } 
    }
 
    return finalSentence.join(' ');
  }
}