it("should count vowels in string", () => {
  expect(countVowels("hello")).toEqual(2);
  expect(countVowels("openai")).toEqual(4);
  expect(countVowels("pp")).toEqual(0);
  expect(countVowels("AEIOU")).toEqual(5);
});

function countVowels(words: string) {
  //refactor
  //   return words.split("").filter((word: string) => {
  //     return checkVowels(word);
  //   }).length;
  let count = 0;
  for (let char of words) {
    if (checkVowels(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

function checkVowels(word: string): unknown {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(word);
}
