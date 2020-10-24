// function displayEvenNumbers(){
//   let numbers = [1,2,3,4,5,6,7,8];
//   let evenNumbers = [];
//   for(let i=0; i<numbers.length-1; i++;){
//       if(numbers % 2 = 0); {
//           evenNumbers.push(i);
//       }
//       return evenNumbers;
//   }
// }
// displayEvenNumbers(); // should return [2,4,6,8]

// // HINT - eight things need to be changed here for this to work!
// // Start by fixing the syntax errors and then run the function to see what your output is.

//********************************************************** */

// // What is the output of the following code? Can you explain why?
// var arr = [1, 2, 3, 4, 5];
// delete arr[0];

// console.log(arr.length);

/***************************************************************** */

// // There is a bug in the below code preventing the factors of 18 from being displayed accurately. Can you spot it?
// var dividend = 18;
// var numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// for (var i = 0; i < numbers.length; i++) {
//   var factor;
//   var divisor = numbers[i];

//   if (dividend % divisor === 0) {
//     factor = true;
//   }

//   if (factor) {
//     console.log(divisor + ' is a factor of ' + dividend + '!');
//   }
// }

/***************************************************************** */

//Debug each: You are given this function each, but it doesn't work exactly as expected.
// It should call callback on value, key, and collection respectively for each element of collection,
// and accept both arrays and objects. Identify everything incorrect with each as it is provided,
// and modify the function so that it works as expected. Be sure to list all that was incorrect about the original function.

var each = function(collection, callback) {
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
     collection[i] = callback(collection[i], i, collection);
    }
  } else{
      for(var key in collection){
          callback(collection[key],key,collection)
      }
  }
  return collection;
};

function logArray(element,index,array){
    console.log(element);
}
each([1,2,3,4,5],logArray)
//each([1,2,3,4,5],printArray);
//each({name:"Bois",lastName:'Bakhodirov'},printArray);