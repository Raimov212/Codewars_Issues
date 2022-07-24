let arr = [1, 2, 3, 4, 5];

var MaxSort = Math.max(...arr);
var MinSort = Math.min(...arr);

let MaxCount = [];
let MinCount = [];

let result = arr.map((value) => {
  if (value < MaxSort) {
    MaxCount.push(value);
  }
  if (value > MinSort) {
    MinCount.push(value);
  }
});

let MaxResult = MaxCount.reduce((a, b) => a + b);
let MinResult = MinCount.reduce((a, b) => a + b);


console.log(MaxResult,MinResult);

