# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: providing an example can help communicate your point if you struggle with the vocabulary.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: MV

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder for an argument/value. An argument is the actual data/value.

Researched answer: A parameter is the variable defined in a function's declaration. When invoked, the parameter is the value that is passed to the function and it is specific when defining in the function. For example: const greeter = (name) => { return `Hello ${name}!`}; name is the parameter and when invoked in console.log(greeter("Boss")), "Boss" is the argument that is passed as the function's parameter now. Returning Hello Boss! "Boss" is the argument which is the actual inputted value of the parameter.

2. What is the difference between an object and a class?

Your answer: From memory of the lecture, a class is basically a recipe or a blueprint for an object. The object is within the class to include key words. Example: class Car {}. Car is the object and {} will hold the information to make up the object. 

Researched answer: A class is a blueprint or template for creating objects. It defines the structure and behavior that objects of that class will have. When creating objects from that class, they possess the attributes and functions that the class is defined by. This makes classes reusable and creating more objects within that class possible. 

3. What is iteration?

Your answer: Iteration is the process of repetition of codes, example: for loop. The code repeats itself until a condition is met. For example: for(let i = 0; i < 5; i++>) --> this states i will start at index 0; condition is that i will go only up to less than index 5; and the increment will be +1 each repitition. Following that will be a set of code that the for loop will implement each increment until i reaches less than inex 5. 

Researched answer: Iteration is a repetitive execution of a set of codes. It performs the same operation on repeat until a condition is met. Iteration is a fundamental technicque for performing in a controlled organized way. 

4. STRETCH: What is hoisting in JavaScript?

Researched answer: Hoisting allows the users to utilize functions and variables before they are declared. Example1: console.log(x); var x = 5 --> Returns: undefined. Example2: sayHello(); const sayHello() { console.log("Hello") } --> Returns: Hello. Both of these examples showcase hoisting because their variables or functions were not yet declared and placed on the top of the block of codes. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Spread operator: (`...`) The spread operator is used in a way to take elements/values from point A to point B. Used mainly in array, string, or object, it allows the users to spread elements/values and make them easier to utilize by spreading them apart. In the examples I found,  it seemed very similar to .concat, however, .concat is only utilized for arrays. The following example shows using the spread operator to make a copy of the original variable and objects, but modifying certain values while still maintaining the unmodified values.

const myData = {
    firstName: "Marinda",
    lastName: "Vang",
    age: "forever 26",
    city: "San Diego",
  };
  
  const pretendData = {
    ...myData,
    age: "68", 
    city: "the Moon",
  };
  
  console.log(pretendData)

  Returns: {
  firstName: 'Marinda',
  lastName: 'Vang',
  age: '68',
  city: 'the Moon'
}

2. React: This is a javascript library for building UI. This library was created and maintained by Facebook and a community of indiividual developers and companies. This library is broadly used for creating interactive and dynamic UI, for example: websites. React is used with other technologies such as HTML and CSS. Utilizing yarn for it's package manager, you can write javascript codes to uses react's components, concepts, and features to build your user interface. --> It is NOT a program or an application. <--

3. JSX: Stands for JavaScript XML. As a syntax extension for javascript which is often used in React, JSX allows user to use HTML like coding within your javascript. I found that quite interesting because it does seem to make it easier to create and physically see the outcome. For example: const example = <h1>Hey Boss!</h1> which invoked in React will showcase, "Hey Boss!" 

