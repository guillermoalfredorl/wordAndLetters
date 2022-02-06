let words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
let letters = ["a", "h", "l", "e", "l", "o", "g", "k"];

const findMaxLength = (arr1, arr2) => {
  let maxLength = 0;
  let wordCompare = "";
  let lengthCompare = 0;
  for (word of arr1) {
    let arrSplited = word.split("");
    let result = arr2.filter((s) => arrSplited.some((str) => str.includes(s)));
    if (result.length === arrSplited.length) {
      lengthCompare = arrSplited.length;
    }
    if (maxLength < lengthCompare) {
      maxLength = lengthCompare;
      wordCompare = word;
    }
  }
  console.log(maxLength);
  console.log(wordCompare);
};

findMaxLength(words, letters);
