"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentGrades = [80, 70, 66, 88, 71]; //grades of students
//calculate the average grade of student than divide it by studentGrades length
let averageGrades = studentGrades.reduce((a, b) => a + b) / studentGrades.length;
console.log(`${averageGrades}%`); //log the percentage of student overall grade
