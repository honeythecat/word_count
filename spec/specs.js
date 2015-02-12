describe("wordOrder", function() {

  it("returns a word if it is found in a string", function() {
    expect(wordOrder("hello")).to.eql(["1 hello"]);
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello world")).to.eql(["1 world", "1 hello"]);
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello hello world world world")).to.eql(["3 world", "2 hello"]);
  });

  it("lists the words in order of frequency", function() {
    expect(wordOrder("hello goodbye goodbye hello goodbye what what")).to.eql(["3 goodbye", "2 what", "2 hello"]);
  });

});
