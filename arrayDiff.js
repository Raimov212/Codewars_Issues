function arrayDiff(a, b) {
  return a.filter((value) => !b.includes(value));
}

// function arrayDiff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//  }

// function arrayDiff(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         a.splice(i, 1);
//       }
//     }
//   }
//   return a;
// }
console.log(arrayDiff([1, 2, 3], [1, 2]));

// function notString(str) {
//   if (str.startsWith("not")) return str;
//   else return `not ${str}`;
// }

// console.log(notString("not"));

// function frontBack(str) {
//   if (str.length == 1) return str;
//   else
//     return (
//       str.substring(str.length - 1) +
//       str.substring(1, str.length - 1) +
//       str.substring(0, 1)
//     );
// }

// console.log(frontBack("abcdefk"));
