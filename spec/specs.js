describe("wordOrder", function() {

  it("returns a word if it is found in a string", function() {
    expect(wordOrder("hello")[0]).to.eql(["hello", 1]);
  });

  it("counts the number of times a word is in an array", function() {
    expect(wordOrder("hello hello hello")).to.eql([["hello", 3]]);
  });
});
