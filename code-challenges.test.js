// ASSESSMENT 2: Coding Practical Questions with Jest

// const { isDirective } = require("@babel/types")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"

describe("isDivisibleByThree", () => {
    it("should return 15 is divisible by three when the input number is 15 or ", () => {
      const object1 = { number: 15 }
      const result = isDivisibleByThree(object1.number)
      expect(result).toBe("15 is divisible by three")
    })
// })
// Returns: ReferenceError: isDivisibleByThree is not defined

// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
    it("should return 0 is divisible by three when the input number is 0", () => {
        const object2 = { number: 0 }
        const result2 = isDivisibleByThree(object2.number)
        expect(result2).toBe("0 is divisible by three")
    })
// Returns: ReferenceError: isDivisibleByThree is not defined

const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
    it("should return -7 is not divisible by three when the input number is 7", () => {
        const object3 = { number: -7 }
        const result3 = isDivisibleByThree(object3.number)
        expect(result3).toBe("-7 is not divisible by three")
    })
})
// Returns: ReferenceError: isDivisibleByThree is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
// Input: An object with a value of a number.
// Output: A string stating whether that number is divisible by three or not.
// Create a function that contains a conditional statment with if/else.
// Equate number % 3 === 0;
    // If true, return (number) is divisible by three;
    // If false, return (number) is not divisible by three.

  

const isDivisibleByThree = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`;
    }   else {
        return `${number} is not divisible by three`
    }
}

// const object3 = { number: -7 }
// const result3 = isDivisibleByThree(object3.number)
// console.log(result3) --> Returns: -7 is not divisible by three

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word in the array', () => {
      const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
      const expectedOutput = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
      const result = capitalizeFirstLetter(randomNouns1)
      expect(result).toEqual(expectedOutput)
    })
//   })
// Returns: ReferenceError: capitalizeFirstLetter is not defined

// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    it("should capitalize the first letter of each word in the array", () => {
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        const expectedOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"]
        const result2 =capitalizeFirstLetter(randomNouns2)
        expect(result2).toEqual(expectedOutput2)
    })
})
// Returns: ReferenceError: capitalizeFirstLetter is not defined

// b) Create the function that makes the test pass.

const capitalizeFirstLetter = (array) => {
    return array.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
}

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const newRandomNouns = (capitalizeFirstLetter(randomNouns1))
// console.log(newRandomNouns) // Returns: [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// Pseudo code:
// Input: An array of words.
// Output: An array of the same words with the first letter capitalized.
// Create a function that will iterate through array with an anonymous function. 
    // Create an anonymous function that will iterate via .map 
        // Iteration will identify character at index 0 of each word with .charAt(0)
            // uppercase character found at .charAt(0) with .toUpperCase
                // add (+) that uppercased character to the rest of the characters in that word utiliing .slice(1) --> second character through end character of the word will be added to upperCased index 0 character. Could also use .concat instead of +.



// Notes: Testing with jest seemed easy at first but similar to other lectures and functions/methods we were taught, I need to think outside the box vice focusing exactly on a specific lecture only to write codes. I'll keep practicing to better my thought process when producing. 