/**
 * Greed is a dice game played with five six-sided dice. Your mission, should 
 * you choose to accept it, is to score a throw according to these rules. You 
 * will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a "5" can 
only count as part of a triplet (contributing to the 500 points) or as a 
single 50 points, but not both in the same roll.
 */


function score( dice ) {
  let score = 0;
  let [points, chosenDice] = nextBestScore(dice);
  while (points !== 0) {
    dice = removeChosenDice(dice, chosenDice);
    score += points;
    [points, chosenDice] = nextBestScore(dice);
  }
  return score;
}

function nextBestScore(dice) {
  let match = dice.sort().join('').match(/(1{3}|2{3}|3{3}|4{3}|5{3}|6{3})/);
  if (match) return [scoreForThreeOf[match[0][0]], match[0].split('').map(n => parseInt(n))];
  if (dice.indexOf(1) > -1) return [100, [1]];
  if (dice.indexOf(5) > -1) return [50, [5]];
  return [0, []];
}

let scoreForThreeOf = {
  1: 1000,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600
};

function removeChosenDice(dice, chosenDice) {
  let die;
  while (die = chosenDice.pop()) {
    dice.splice(dice.indexOf(die), 1);
  }
  return dice;
}

/* test cases */

describe('#removeChosenDice', () => {
  it('should remove dice', () => {
    Test.assertSimilar(removeChosenDice([1, 2, 3, 4], [3]), [1,2,4]);
  });
  it('should remove multiple dice', () => {
    Test.assertSimilar(removeChosenDice([1, 2, 3, 4], [1, 2]), [3, 4]);
  });
  it('should remove all', () => {
    Test.assertSimilar(removeChosenDice([1, 2, 3, 4], [1, 2, 4, 3]), []);
  });
});

describe('#nextBestScore', () => {
  it('should work for triplets', () => {
    Test.assertSimilar(nextBestScore([3, 3, 2, 3, 4, 5]), [300, [3,3,3]]);
  });
  it('should catch a 1 or 5', () => {
    Test.assertSimilar(nextBestScore([3,2,4,6,4,5]), [50, [5]]);
    Test.assertSimilar(nextBestScore([3,2,4,6,4,1]), [100, [1]]);
  });
});

describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
  });
  
  it( "should value this triplet correctly", function() {
    Test.assertEquals( score( [4, 4, 4, 3, 3] ), 400, "Should be 400" );
  });
  
  it( "should value this mixed set correctly", function() {
    Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
  });
});