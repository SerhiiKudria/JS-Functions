//0
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 65;
}
console.log("isWorkingAgePerson(20): ", isWorkingAgePerson(20));
console.log("isWorkingAgePerson(4):  ", isWorkingAgePerson(4));
console.log("isWorkingAgePerson(88): ", isWorkingAgePerson(88));
//1
function isSimple(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log("isSimple(16): ", isSimple(16));
console.log("isSimple(17):  ", isSimple(17));
console.log("isSimple(18): ", isSimple(18));
console.log("isSimple(1): ", isSimple(1));
console.log("isSimple(2): ", isSimple(2));
console.log("isSimple(3): ", isSimple(3));
console.log("isSimple(4): ", isSimple(4));
console.log("isSimple(5): ", isSimple(5));
console.log("isSimple(6): ", isSimple(6));
//2
function checkMultiplicity(numerator, denominator) {
  return numerator % denominator === 0;
}
console.log("checkMultiplicity(25, 5): ", checkMultiplicity(25, 5));
console.log("checkMultiplicity(15, 3): ", checkMultiplicity(15, 3));
console.log("checkMultiplicity(15, 5): ", checkMultiplicity(15, 5));
console.log("checkMultiplicity(15, 4): ", checkMultiplicity(15, 4));
//3
function isTriangleExist(a, b, c) {
  if (a > b && a > c) {
    return a < b + c;
  } else if (b > a && b > c) {
    return b < a + c;
  } else {
    return c < a + b;
  }
}
console.log("isTriangleExist(1, 2, 3): ", isTriangleExist(1, 2, 3));
console.log("isTriangleExist(2, 3, 4): ", isTriangleExist(2, 3, 4));
console.log("isTriangleExist(5, 10, 3): ", isTriangleExist(5, 10, 3));
//4
function squareOfTriangle(a, b, c) {
  return (
    (1 / 4) * Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c))
  );
}
console.log("squareOfTriangle(2, 3, 4): ", squareOfTriangle(2, 3, 4));
