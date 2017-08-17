/*

http://www.codewars.com/kata/valid-binary-christmas-tree

Santa just finished taking a data structures course, and thought it would be a great idea to build a Binary Christmas
Tree! All of Santa's helpers created a Binary Christmas Tree, but not all of them meet his requirements. Can you write
some code to validate the Binary Christmas Trees?

Valid Binary Christmas Tree

Write a function isValidTree that accepts a Binary Tree, and returns true if it meets Santa's requirements, false
otherwise. Since the tree is a binary tree, each node can have 0, 1, or 2 children. The left and right properties can
be used to access the current nodes left and right children. All nodes have an ornament property, which is the name of
the ornament, and a color property, which represents the color of the ornament.

Santa's Binary Christmas Tree Requirements

A valid Binary Christmas Tree will meet the following requirements:

Root node has a 'star' ornament
Nodes with zero children (excluding the root node) have a 'blue' colored ornament
Nodes with one or two children (excluding the root node) have a 'red' colored ornament

 */

function isValidTree(tree){
  function recur(tree) {
    if (!tree) return true
    if (!tree.left && !tree.right ? tree.color !== 'blue' : tree.color !== 'red') return false
    return recur(tree.left) && recur(tree.right)
  }

  return (tree.ornament === 'star') && recur(tree.left) && recur(tree.right)
}
