function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num < 0) {
    return false;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num === i * i) {
        return false;
      } else if (num % i !== 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log(isPrime(9));
