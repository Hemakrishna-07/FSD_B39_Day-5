// 3(a). print odd nums using arrow function.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let odds = arr.filter(n => n%2);
console.log(odds);


// 3(b). convert all the strings to title caps in a string array.
const title = (str) => str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
console.log(title("this is sparta"));


// 3(c). sum of all num in an array using arrow function.
const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);


// 3(d). return all the prime numbers in an array using arrow function.
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);


// 3(e). return all the palindromes in an array using arrow function.
let palindromeArray = (arr) => {
    let isPalindrome = true;
    for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    return isPalindrome;
};
console.log(palindromeArray([1,2,1]));
console.log(palindromeArray([1,2,2]));
console.log(palindromeArray([1,2,3,4,5]));
console.log(palindromeArray([1,2,3,4,5]));