

/////1. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
 /////   [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

 //// 1. Tam ədədlərin boş olmayan massivini nəzərə alaraq, dəyərlərin ardıcıllıqla vurulmasının nəticəsini qaytarın. Nümunə:
  
 
//  function multiplyArrayValues(arr) {
//     // Check if the array is empty
//     if (arr.length === 0) {
//       return "Array is empty";
//     }
  
//     // Initialize the result to the first element of the array
//     let result = arr[0];
  
//     // Iterate through the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//       result *= arr[i];  // Multiply the current number with the result
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const myArray = [1, 2, 3, 4];
//   const result = multiplyArrayValues(myArray);
//   console.log(result);  // Output: 24


////2. Complete the square sum function so that it squares each number passed into it and then sums the results together.
////  . Kvadrat cəmi funksiyasını elə tamamlayın ki, ona ötürülən hər bir ədədi kvadratlaşdırsın və sonra nəticələri birlikdə cəmləsin.
///Məsələn, [1, 2, 2] üçün 9  qaytarmalıdır.
///For example, for [1, 2, 2] it should return 9
  

// function squareSum(numbers) {
//     // Use the reduce function to sum the squared values
//     return numbers.reduce((sum, num) => sum + num * num, 0);
//   }
  
//   // Example usage:
//   const myArray = [1, 2, 2];
//   const result = squareSum(myArray);
//   console.log(result);  // Output: 9





// 3. You get an array of numbers, return the sum of all of the positives ones.
///  Siz nömrələr massivi alırsınız, bütün müsbətlərin cəmini qaytarın.
// [1, -12, 2, -13, 3, 5, -11, -14, -15];

// function sumOfPositives(numbers) {
//     // Use the filter function to get an array of positive numbers
//     const positiveNumbers = numbers.filter(num => num > 0);
  
//     // Use the reduce function to sum the positive numbers
//     return positiveNumbers.reduce((sum, num) => sum + num, 0);
//   }
  
//   // Example usage:
//   const myArray = [1, -12, 2, -13, 3, 5, -11, -14, -15];
//   const result = sumOfPositives(myArray);
//   console.log(result);  // Output: 11
  

  



/////4. Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//  Example
//  const arr = ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

////4. Sözlər massivini götürən və onları bir cümləyə birləşdirən və cümləni qaytaran funksiya yazın. Siz sözləri təmizləmək və ya durğu işarələri əlavə etmək ehtiyacını rədd edə bilərsiniz, lakin hər bir söz arasında boşluq əlavə etməlisiniz. Ehtiyatlı olun, cümlənin əvvəlində və sonunda boşluq olmamalıdır!


// function smashWords(wordsArray) {
//     // Use the join function to concatenate the words with spaces
//     const sentence = wordsArray.join(' ');
  
//     return sentence;
//   }
  
//   // Example usage:
//   const myArray = ['hello', 'world', 'this', 'is', 'great'];
//   const result = smashWords(myArray);
//   console.log(result);  // Output: 'hello world this is great'
  



/////5. Convert number to reversed array of digits
//  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//  Example(Input => Output):
//  35231 => [1,3,2,5,3]


// function reverseDigits(number) {
//     // Convert the number to a string, split it into an array of characters, reverse the array, and map each character back to its integer form
//     const reversedArray = String(number).split('').reverse().map(Number);
  
//     return reversedArray;
//   }
  
//   // Example usage:
//   const myNumber = 35231;
//   const result = reverseDigits(myNumber);
//   console.log(result);  // Output: [1, 3, 2, 5, 3]
  



// 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

//  Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


//  Examples (input -> output)
// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]



// 6. Sizə hər ikisində yalnız tam ədədlər olan iki çeşidlənmiş massiv verilir. Tapşırığınız onları tək birinə birləşdirməyin yolunu tapmaqdır, asc qaydasında sıralanır. mergeArrays(arr1, arr2) funksiyasını tamamlayın, burada arr1 və arr2 orijinal çeşidlənmiş massivlərdir.

// Doğrulama ilə bağlı narahat olmanıza ehtiyac yoxdur, çünki arr1 və arr2 0 və ya daha çox Tam ədədli massivlər olmalıdır. Hər iki arr1 və arr2 boşdursa, sadəcə boş massiv qaytarın.

//  Qeyd: arr1 və arr2 müxtəlif sıralarda sıralana bilər. Həmçinin arr1 və arr2 eyni tam ədədlərə malik ola bilər. Qaytarılan nəticədə dublikatı silin.


// function mergeArrays(arr1, arr2) {
//     // Concatenate the two arrays and remove duplicates using a Set
//     const mergedArray = Array.from(new Set(arr1.concat(arr2)));
  
//     // Sort the merged array in ascending order
//     mergedArray.sort((a, b) => a - b);
  
//     return mergedArray;
//   }
  
//   // Example usage:
//   const example1 = mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
//   console.log(example1);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
//   const example2 = mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);
//   console.log(example2);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
//   const example3 = mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
//   console.log(example3);  // Output: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
  