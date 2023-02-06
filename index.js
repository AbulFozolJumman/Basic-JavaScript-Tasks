// Problem 1: Let’s play a mind game
// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

// function mindGame(number) {
//     if (typeof number == "number" && number >= 0) {
//         const resultAfterMultiplication = number * 3;
//         const resultAfterAddition = resultAfterMultiplication + 10;
//         const resultAfterDivision = resultAfterAddition / 2;
//         const resultAfterSubtraction = resultAfterDivision -5;
//         return resultAfterSubtraction;
//     }
//     return "Invalid input, Input should be number(Only positive) only";
// }

// const myNumber = 5;
// const myNumberAfterOperation = mindGame(myNumber);
// console.log(myNumberAfterOperation);

// Function Description: 
// Taken a function named mindGame()
// Then taken a number(Only positive) as input
// Then inside the function body, multiplied the input by 3
// Then after the multiplication, added 10 with the result i got after multiplication
// Then after the addition, I divided the result by 2
// Then after the division, subtracted 5 from the result
// And after subtraction, returned the final result as output

// Sample Input & Output
// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: 33
// Output: 49.5

// Problem 2: Finding even or odd
// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।

// function evenOdd(word) {
//     if (typeof word == "string") {
//         if (word.length % 2 == 0) {
//             return "even";
//         }
//         return "odd";
//     }
//     return "Invalid input, Input should be string only";
// }

// const myWord = "Phero";
// const myWordEvenOrOdd = evenOdd(myWord);
// console.log(myWordEvenOrOdd);

// Function Description:
// Taken a function named evenOdd()
// Then taken a string as input
// Then inside the function body, calculated how many characters are there inside the string
// When the calculated length of the string was even, then returned output as "even"
// When the calculated length of the string was odd, then returned output as "odd"

// Sample Input & Output:-
// Input: ‘Phero’
// Output: odd

// Input: ‘Batch7’
// Output: even

// Input: ‘chatgpt’
// Output: odd

// Problem 3: Is Less or Greater than seven
// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.

// function isLGSeven(number) {
//     if (typeof number == "number") {
//         const difference = number - 7;
//         if (difference < 7){
//             return difference;
//         }
//         return number * 2;
//     }
//     return "Invalid input, Input should be number only";
// }

// const myNumber = -15;
// const isMyNumberLGSeven = isLGSeven(myNumber);
// console.log(isMyNumberLGSeven);

// Function Description:
// Taken a function named isLGSeven()
// Then taken a number as input
// Then inside the function body, subtracted 7 from the input
// When the result is less than 7, then returned the result as output
// When the result is more than 7, then returned double of the input as output

// Sample Input & Output:-
// Input: 6
// Output: -1

// Input: -15
// Output: -22

// Input: 15
// Output: 30

// Problem 4: Finding Bad data
// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

// function findingBadData(numbers) {
//     if (Array.isArray(numbers) == true) {
//         const negativeNumbers = [];
//         for (let i = 0; i < numbers.length; i++) {
//             const number = numbers[i];
//             if (number < 0) {
//                 negativeNumbers.push(number);
//             }
//         }
//         return negativeNumbers.length;
//     }
//     return "Invalid input, Input should be array only";
// }

// const myNumbers = [ 66 ];
// const myNegativeNumbers = findingBadData(myNumbers);
// console.log(myNegativeNumbers);

// Function Description:
// Taken a function named findingBadData()
// Then taken an array as input
// Then inside the function body, checked if there is any negative value inside the array
// Then returned how many negative value are there inside the array as output

// Sample Input & Output:-
// Input: [ 1,2,5 ]
// Output: 0

// Input: [ 2, -5, -7, -13 ]
// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]
// Output: 5

// Problem 5: Convert your gems into diamond
// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// function gemsToDiamond(friend1, friend2, friend3) {
//     if (typeof friend1 == "number" && typeof friend2 == "number" && typeof friend3 == "number" && arguments.length == 3) {
//         const friend1PerGemsToDiamondPower = 21;
//         const friend2PerGemsToDiamondPower = 32;
//         const friend3PerGemsToDiamondPower = 43;
//         const friend1TotalDiamond = friend1 * friend1PerGemsToDiamondPower;
//         const friend2TotalDiamond = friend2 * friend2PerGemsToDiamondPower;
//         const friend3TotalDiamond = friend3 * friend3PerGemsToDiamondPower;
//         const totalDiamond = friend1TotalDiamond + friend2TotalDiamond + friend3TotalDiamond;
//         if (totalDiamond > 1000 * 2) {
//             return totalDiamond - 2000;
//         }
//         return totalDiamond;
//     }
//     return "Invalid input, Input should be three parameter of number only";
// }

// const friend1GemQuantity = 100;
// const friend2GemQuantity = 5;
// const friend3GemQuantity = 1;
// const friendsTotalDiamond = gemsToDiamond(friend1GemQuantity, friend2GemQuantity, friend3GemQuantity);
// console.log(friendsTotalDiamond);

// Function Description:
// Taken a function named gemsToDiamond()
// Then taken three number as input parameter
// The first parameter is the quantity of how many gems friend1 has
// The second parameter is the quantity of how many gems friend2 has
// The third parameter is the quantity of how many gems friend3 has
// Then inside the function body, multiplied friend1 gems quantity by his Per Gems To Diamond Power which is 21 and got the result of friend1 total number of diamonds
// Then multiplied friend2 gems quantity by his Per Gems To Diamond Power which is 32 and got the result of friend2 total number of diamonds
// Then multiplied friend3 gems quantity by his Per Gems To Diamond Power which is 43 and got the result of friend3 total number of diamonds
// Then calculated the sum of all multiplication results and got the sum of the total number of diamonds
// When the sum is greater than 1000*2 then returned sum-2000 as output
// When the sum is less than 1000*2 then returned the sum as output

// Sample Input & Output:-
// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303