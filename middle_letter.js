function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// function getMiddle(s) {
//   let count = [];
//   let result = [];

//   if (s.length % 2 === 0) {
//     for (let i = 0; i < s.length / 2; i++) {
//       count.push(s[i + 1]);
//     }
//     result.push(count.pop());
//     result.push(count.pop());
//   } else if (s.length % 2 !== 0) {
//     for (let i = 0; i < s.length / 2; i++) {
//       count.push(s[i]);
//     }
//     result.push(count.pop());
//   }
//   return result.reverse().join("");
// }

// console.log(getMiddle(["s", "s", "h", "a", "b", "k"]));
