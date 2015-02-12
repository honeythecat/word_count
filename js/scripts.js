var wordOrder = function(text) {
  text = text.toLowerCase();
  var splitText = text.split(" ");
  var word = []
  var count =[]
  var prev;

  for (var i = 0; i < splitText.length; i++) {
    if (splitText[i] !== prev) {
      word.push(splitText[i]);
      count.push(1)
    } else {
      count[count.length-1]++;
    }
    prev = splitText[i];
  }

  return [word, count]

};
