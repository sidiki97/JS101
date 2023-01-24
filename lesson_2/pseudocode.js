/*

Input for both numbers
Add

Formal:

GET num1
GET num2

SET num1 = Number(num1) 
SET num1 = Number(num2)

PRINT num1 + num2

*/

/*

a function that takes two arrays of numbers and returns the result of merging the arrays. 
The elements of the first array should become the elements at the even indexes of the returned array, 
while the elements of the second array should become the elements at the odd indexes.

Create new array
Save total length by combining length of both arrays
Set pointer for both arrays starting at index 0

Iterate to total length
check if iterator is even:
  if even add number being pointed at to array
  Increase iterator by 1
else 
  add number pointed at to array
  increase odd interator by 1

return array



*/


function merge(arr1, arr2) {

  let totalength = arr1.length + arr2.length;
  let i = 0;
  let j = 0;
  let returnArr = [];

  for (let n = 0; n < totalength; n += 1) {
    if (n % 2 == 0) {
      returnArr.push(arr1[i]);
      i += 1;
    } else {
      returnArr.push(arr2[j]);
      j += 1;
    }
  }

  return returnArr;
  
}

console.log(merge([1, 2, 3], [4, 5, 6]));
