"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to calculate the average score from a list of scores
function calculateAverageScore(...scores) {
    // Calculate the total sum of all the scores
    const totalScore = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
    console.log(`Total score: ${totalScore}`); // Log the total score
    // Compute the average score
    const averageScore = totalScore / scores.length; // Divide total score with score array length to find the average score
    // Return the average score
    return `Average Score: ${averageScore.toFixed(2)}%`;
}
// Example usage with a list of scores
const averageScoreResult = calculateAverageScore(90, 30, 50, 10, 80, 40); // Calculate the average score for the given scores
console.log(averageScoreResult); // Print the result
