function disemvowel(str) {
  let vowel = ["a", "e", "i", "o", "u"];

  for (let k = 0; k < vowel.length; k++) {
    if (vowel[k] === "u") {
      return vowel.splice(k, 1);
    }
  }

  console.log(vowel);

  let result = [];

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
      }
    }
  }

  //   console.log(result);
}

console.log(disemvowel("This website is for losers LOL"));
// disemvowel("bbbokkkkkooaei");
