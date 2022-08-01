function disemvowel(str, vowel) {
  // str = str.toLowerCase().split("");
  // vowel = vowel.split("");
  // for (let j = 0; j < vowel.length; j++) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === vowel[j]) {
  //       str.splice(i, 1);
  //     }
  //   }
  // }

  // return str.join("");

  str = str.split("");
  vowel = vowel.split("");
  return str.filter((value) => !vowel.includes(value.toLowerCase())).join("");
}

console.log(disemvowel("This website is for losers LOL", "aeiou"));
