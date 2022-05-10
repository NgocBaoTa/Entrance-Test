// Bai 1

function adjacentElementsProduct(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }

  console.log(max);
}

adjacentElementsProduct([1, 2, 3, 4, 9, 1, 2, 10, 11, 0]);

// Bai 2
function alternatingSums(a) {
  let totalEven = 0;
  let totalOdd = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      totalEven += a[i];
    } else {
      totalOdd += a[i];
    }
  }
   // const arr = []
  // arr.push(totalEven)
  // arr.push(totalOdd)
  // console.log(arr)
  console.log([totalEven, totalOdd]);
}

alternatingSums([1, 4, 5, 35, 2, 3, 1]);
