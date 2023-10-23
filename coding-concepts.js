// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ["Hotel", "2023"]
// b) Verify and explain: Output --> [ 'Hotel', '2023' ] 
// console.log is invoking const cohort to return as an array with .split. .split(" ") is stating to "split" the current string at any space present. 

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: Error?
// b) Verify and explain: Output --> undefined <-- (undefined makes more sense than error.) This returned undefined because the function greeter does not have a return function. It has a parameter but does not tell it what to do or what it can do. 
//To correct the function, please see below:

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student")) // Output --> Hello, LEARN Student!

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Output --> [ 11, 13, 15 ] . const onlyOdds states array of numbers [11, 12, 13, 14, 15] is to be filterd with the built-in method .filter . .filter is thus calling a function with the value (number) in iteration to run a boolean. The boolean return is coming from "number % 2 !== 0"; if number is not divisible by 2, it is true. If true, it is filtered to return in const onlyOdds. 

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: My answer was WRONG due to the added quotation marks. Outcome --> JavaScript. When invoking with brackets, it only returns the value itself. Quotation marks are not part of actual string values, it is only used to represent the data type.
// In the console.log statement, it's asking to return object.key's value in the 0 index which is JavaScript. 



// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Hotel"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: undefined? Error?
// b) Verify and explain: Output --> Learn { student: 'George', cohort: 'Hotel', year: 2023 } . The constructor function's values has been defined except (name). const learnStudent creates new value "George" to define "name" thus returning const learnStudent to include all declared value with new value (name) with "George". 