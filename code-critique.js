// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
def find_first_vowel_index(input_string):
    vowels = "AEIOUaeiou"
    for index, char in enumerate(input_string):
        if char in vowels:
            return index
    return -1  # Return -1 if no vowels are found in the string

# Example usage:
input_string = "Hello, world!"
result = find_first_vowel_index(input_string)
if result != -1:
    print(f"The first vowel is at index {result}.")
else:
    print("No vowels found in the string.")


// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// I definitely was surprised and considered asking chatGPT to rewrite it for javascript. However, I assumed that wouldn't be what the assignment is requesting. chatGPT answered my request by providing a python example which I am not familiar with nor is it taught at LEARN Academy. Looking through the code provided by chatGPT, it is very similar to Javascript. The syntaxes are different, for example (:) is used in pythonn and (;)/({}) is used in javascript for each informated line of code. It doesn't look like it is required in python to declare variables whereas we use let, var, const to declare variables in javascript. 

// # Example usage:
// input_string = "Hello, world!" --> const inputString = "Hello, world!"
// result = find_first_vowel_index(input_string) --> const result = findFirstVowelIndex(inputString)
// if result != -1: --> if(result !== -1) ==> {
//     print(f"The first vowel is at index {result}.") --> return `The first vowel is at index ${result}.`
// else: --> } else {
//     print("No vowels found in the string.") --> return `No vowels found in the string.`
// --> }

// I wouldn't say I have any dislike or likes about the differences as they are still quite very similar codes to javascript. I will say that with javascript and utilizing arrow syntax/fat arrows, it does make it easier to see and understand that it indicates {} another set of condition/functions/methods within itself. Had python not utilize indentation, I probably would not have noticed at first glance that each code belong with a certain set. I definitely can say that it really is like listening to English speakers vice American english speakers. Similar but different. 