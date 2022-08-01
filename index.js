function isValidIP(str) {
  return str.split(".").map((value) => (value <= 255 ? (return true) : false));
}
console.log(isValidIP("12.255.156.100"));
