// whether two numbers have the same last digits or not

// approach 1
function haveSameLastDigits(
  numA: string | number,
  numB: string | number
): boolean {
  const divideNumAByTen = +numA % 10;
  const divideNumBByTen = +numB % 10;

  return divideNumAByTen === divideNumBByTen;
}

// approach 2
function haveSameLastDigits2(
  numA: string | number,
  numB: string | number
): boolean {
  const divideNumAByTen = numA.toString().slice(-1);
  const divideNumBByTen = numB.toString().slice(-1);

  return divideNumAByTen === divideNumBByTen;
}

// approach 3
function haveSameLastDigits3(
  numA: string | number,
  numB: string | number
): boolean {
  const arrayedNumA = [...numA.toString()]; // an array that contains a string
  const arrayedNumB = [...numA.toString()];

  return (
    arrayedNumA[arrayedNumA.length - 1] === arrayedNumB[arrayedNumB.length - 1]
  );
}

// approach 4
function haveSameLastDigits4(
  numA: string | number,
  numB: string | number
): boolean {
  const num1 = +numA & 1;
  const num2 = +numB & 1;
  return num1 === num2;
}
