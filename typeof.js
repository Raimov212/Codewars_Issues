function filter_list(l) {
  let num = [];
  l.map((value) => {
    if (typeof value === typeof Number(value)) {
      num.push(value);
    }
  });
  return num;
}

console.log(filter_list([1, 2, "m"]));

// arr.map((value) => {
//   // console.log(typeof Number(value));
//   if (typeof value === typeof Number(value)) {
//     num.push(value);
//   } else if (typeof value === typeof String(value)) {
//     str.push(value);
//   }
// });

// console.log(num);
// console.log(str);

// console.log(typeof newArr);
