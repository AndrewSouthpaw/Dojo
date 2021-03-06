/*
Your task is to remove all duplicate words from string, leaving only single words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
 */

export const removeDuplicateWords = (sentence) => [...new Set(sentence.split(' '))].join(' ')
