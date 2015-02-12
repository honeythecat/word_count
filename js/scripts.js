var wordOrder = function(text) {
  text = text.toLowerCase();
  var splitText = text.split(" ").sort();
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

  var counted = [];
  count.forEach(function(count, i){
    counted.push([count, word[i]].join(" "));
  });
  return counted.sort().reverse().split(",").join(" ");
};

$(function(){
  $("form#word_order").submit(function(event) {
    var text = $("input#phrase").val();
    var array = wordOrder(text);
    array.forEach(function(word) {
      alert(word);
      $(".count").text(word);
    });

    $(".results").show();
    event.preventDefault();
  });


});
