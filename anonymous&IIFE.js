// 1.Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array

//Anonymous Function

let arr1=[0,1,2,3,4,5,6,7,8,9];

let odd = function () {
  let odd= arr1.filter(num => num %2 ==1)
  console.log(odd)
}
odd()

//IIFE Function

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
(function () {
let odds = arr2.filter(n => n%2);
})();


//b. Convert all the strings to title caps in a string array

//Anonymous Function :
 
let str = function () {
    let arr = "this is sparta"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

//IIFE : (In IDE output is showing. but in chrome output showing some error and I cant figure it out)

// (function (a) {
//     a = a.toLowerCase().split(' ');
//     for (var i = 0; i < a.length; i++){
//       a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//     }
//     console.log(a.join(' '));
//     })("this is sparta")  // output: This Is Sparta


//c.Sum of all numbers in an array

//Anonymous :

let sumarr = function () {
    
    let arr1 = [1, 2, 3]
    let sum = arr1.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  sumarr()

//IIFE : (In IDE output is showing. but in chrome output showing some error and I cant figure it out)

// (function () {
//     let sum = [1, 2, 3, 4].reduce(add, 5);
//     function add(accumulator, a) {
//       return accumulator + a;
//     }
//     console.log(sum);
//   })()                       // output: 15


//d.Return all the prime numbers in an array

//Anonymous:

let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3]));

//IIFE:

(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })()
    

//e. Return all the palindromes in an array

//Anonymous :

let isPalindrome = function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()
  
   
//IIFE : (In IDE output is showing. but in chrome output showing some error and I cant figure it out)
  
// ( function () {
//     var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
//     var arr = myArray.filter(function (c, d) {
//       var palindrome = c.split('').reverse().join('');
//       if (c == palindrome) {
//         console.log(myArray[d]);
//       }
//     });
//   })()         // OUTPUT: racecar malayalam



//f.Return median of two sorted arrays of same size.

//Anonymous :

let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));
  
  
//IIFE :

  ( function() {
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })()
  
  

//g. Remove duplicates from an 
  
//Anonymous :
  
  let findDuplicates = function () {
    
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates()
  
  
//IIFE :
   
(function () {
    
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
  })()

  
  
//h.Remove duplicates from an array
  
//Anonymous :
  
  let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  }
  rotateArray([1,2,3,4,5],2)

  
  
//IIFE :
  
  (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
  
  