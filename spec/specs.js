describe("wordOrder", function() {

  it("returns a word if it is found in a string", function() {
    expect(wordOrder("hello")[0]).to.eql(["hello"]);
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello")).to.eql([["hello"], [1]]);
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello world")).to.eql([["hello", "world"], [1, 1]])
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello hello world world world")).to.eql([["hello", "world"], [2, 3]])
  });

  it("lists the words in order of frequency", function() {
    expect(wordOrder("hello goodbye goodbye")).to.eql([["goodbye", "hello"], [2,1]])
  });

});
