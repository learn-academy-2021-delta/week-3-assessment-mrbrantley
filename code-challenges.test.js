// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Ran the test and it failed as planned.

describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

//First I'll need to define a function
const fibSequence = (num) => {
  //I want my solution to be an array so I will define an array with a value of 2 in the sequnce to push numbers into as the code iterates
  let sequence = [1,1]
  //I will be using iteration because the sequence will run for a specified
  //The task requires numbers greater than 2, so the sequence will start at the index of 2 and iterate the amount of times of the input number. This will only return the existing "sequence" array for any number input that is not greater than 2. 
  for (let i=2; i<num; i++){
      //The fibonacci sequence adds the previous number in the sequence (sequence.length -1) to the number two instances prior (sequence.length -2), and the code will push this calculated number onto our existing array. 
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    }
    return sequence
  }

//Test passed

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddNums", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () =>{
      expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(oddNums(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Test failed successfully

// b) Create the function that makes the test pass.

//I want to create a function with an array as an input.
const oddNums = (arr) => {
  //The function will push the odd number values from the input array onto a new array.
  let newArr = []
  // Use array iteration to run the code over the input array
  for(let i=0; i<arr.length; i++){
    //Create a condition with an && operator to pass only number data types that are also odd. 
    if(typeof arr[i] === "number" && arr[i] % 2 !== 0 ){
      //Push the values onto the new array
      newArr.push(arr[i])
    }
  }
  //Sort the values from smallest to largest using the sort method
  return newArr.sort((a, b) => a - b)
}

//Test passes

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("accumulationStation", () => {
  it("takes in an array and returns an array of the accumulating sum", () =>{
      expect(accumulationStation(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(accumulationStation(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(accumulationStation(numbersToAdd3)).toEqual([])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//I'll want to declare a function with an array as an input
const accumulationStation = (arr) => {
  //I'll need an empty array to push new values onto
  let newArr = []
  //Array iteration to perform code on each element in the array
  for (i=0; i<arr.length; i++){
    //I only want to push code onto values that sit at a higher index than 0/first on the array, otherwise the code will return NaN. A condition of i>0 will only iterate the and push the code on values on indexes above the 0/first array index. 
    if (i>0){
      //I want to push the sum of the current value at the current index and the accumulating sum of previous values of the previous indexes
      newArr.push(arr[i] += arr[i-1])
      //An else statement will push the original value at the 0/first index of the original array onto the new array in the first place holder, because it will always begin the iteration at index 0. 
      } else {
        newArr.push(arr[0])
      }
    }
    return newArr
  }

//Test passes