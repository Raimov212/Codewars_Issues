function XO(str) {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((o) => o === "o").length
  );
}

console.log(XO(""));

// function XO(str){
//     let Xcount = 0;
//     let Ycount = 0;

//     str = str.toLowerCase()

//     for(let i=0;i<str.length;i++){
//         if(str[i] === 'x'){
//             Xcount++
//         }
//         if(str[i] == 'o'){
//             Ycount++
//         }
//     }

//     if(Xcount == Ycount){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(XO('ooxxX'));
