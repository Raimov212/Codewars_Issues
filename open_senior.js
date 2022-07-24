function openOrSenior(data) {
  let result = [];
  data.map((value) => {
    for (let i = 0; i < value.length; i++) {
      if (value[i] > 55 && (value[i + 1] < 7 || value[i + 1] > 7)) {
        result.push("Senior");
      } else if (value[i] < 55 && (value[i + 1] > 7 || value[i + 1] < 7)) {
        result.push("Open");
      }
    }
  });

  return result;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
