function descendingOrder(n) {
  //   let m = n.toString().split("");
  //   let k = m.sort((a, b) => b - a).join("");
  //   return parseInt(k);
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(125));
