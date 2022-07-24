function separate(string) {
  let lowerCase = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      lowerCase.push(string[i]);
    }
  }

  let newUpper = string.indexOf(lowerCase);

  let strLowerCase = string.substring(0, newUpper);
  let strUpperCase = string.substring(newUpper, string.length);

  let result = [strLowerCase, strUpperCase];

  return result;
}

console.log(separate("camelCasingCas"));
