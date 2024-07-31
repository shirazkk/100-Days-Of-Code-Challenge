//Define an interface to serve as a blueprint for student information
interface Students {
  name: string;
  age: number;
  id: number;
  course: string;
}

// Create an array of student information objects based on the Students interface
// This allows us to easily store and access student data
let studentInformation: Students[] = [
  {
    name: "Shiraz Ali",
    age: 20,
    id: 28,
    course: "Gen-AI",
  },
  {
    name: "Ali",
    age: 21,
    id: 11,
    course: "Blockchain",
  },
  {
    name: "Faraz Ali",
    age: 19,
    id: 1,
    course: "Metaverse",
  },
];

// Log the information of the student at index 2 (third student) to the console
console.log(studentInformation[2]);
