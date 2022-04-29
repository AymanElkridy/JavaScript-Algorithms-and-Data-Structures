// Sum All Numbers in a Range

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
  let start = arr[0] > arr[1] ? arr[1] : arr[0], i = start,
      end   = arr[0] > arr[1] ? arr[0] : arr[1], sum = 0;
  while (i <= end) {
    sum += i;
    i++;
  }
  return sum;
}

sumAll([1, 4]);