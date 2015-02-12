var wordOrder = function(text) {
  text = text.toLowerCase();
  var splitText = text.split(" ");
  var wordCount = []
  var wordList = []
  var prev;

  for (var i = 0; i < splitText.length; i++) {
    if (splitText[i] !== prev) {
      wordCount.push(splitText[i]);
      wordCount.push(1)
    } else {
      wordCount[1]++;
  }
    prev = splitText[i];
  }
    wordList.push(wordCount);

  return wordList;


};
