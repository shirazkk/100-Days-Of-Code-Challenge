"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an object with lists of developers' skills
let developersskills = {
    programming_languages: ["Typescript", "Flutter", "Python"],
    software_frameworks: ["React", "flask", "Ruby"],
    developers_tools: ["Bootstrap", "Git", "Docker"],
};
// Use object destructuring to extract the lists from the object.
// Object destructuring makes the code shorter and more readable.
let { programming_languages, software_frameworks, developers_tools } = developersskills;
// Access specific elements from the destructured arrays
let lang = programming_languages[0]; // First programming language
let framework = software_frameworks[1]; // Second software framework
let tool = developers_tools[2]; // Third developer tool
// Use template literals to log the extracted values to the console
console.log(`language: "${lang}" 
  framework: "${framework}"
  tool: "${tool}"`);
