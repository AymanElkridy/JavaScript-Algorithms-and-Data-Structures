// Sum All Primes

/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

/* sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156. */

function sumPrimes(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    let k = 0;
    for (let j = 1; j <= i/2; j++) {
      if (i % j == 0) {
        k++;
      }
      if (k === 2) {
        break;
      }
    }
    if (k == 1) {
        sum += i;
    }
  }
  return sum;
}