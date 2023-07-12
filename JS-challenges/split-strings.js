// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution:

function solution(str) {
  var pairs = []; //start with empty array

  for (var i = 0; i < str.length; i += 2) {
    //set i to 0 or less than the length of the string
    var pair = str.substring(i, i + 2); //The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

    if (pair.length === 1) {
      pair += "_";
    }

    pairs.push(pair); //The push() method adds the specified elements to the end of an array and returns the new length of the array.
  }

  return pairs;
}
