/*
https://www.codewars.com/kata/maxpossiblescore

You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions
are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles
the value of new questions. Your job is to determine the maximum possible score.

Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of
new questions. The function should return the test's maximum possible score as an integer, where questions that are
new are worth double points.

You can assume that all questions are unique. Questions are case sensitive.
 */

export const maxPossibleScore = (questions, newQuestions) => {
  const questionValues = newQuestions.reduce((acc, q) => {
    if (acc[q]) acc[q] *= 2
    return acc
  }, Object.assign({}, questions))
  return Object.keys(questionValues).reduce((acc, q) => acc + questionValues[q], 0)
}
