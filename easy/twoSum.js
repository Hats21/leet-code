// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly
// one solution, and you may not use the same element twice.
// You can return the answer in any order.

//  THIS IS A TIME COMPLEITY OF O(n*n) and SPACE COMPLEXITY OF (1);
function sumTwo(arr, target) {
  // 1. loop over an array
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }

  return [];
}

// LET'S IMPROVE IT TIME COMPLEXIT => O(n);
// SPACE COMPLEXIT  => O(n) B/ce we can get memory easly but we can't get time

function twoSum(arr, target) {
  let map = {}; // this has a space complexity of O(n)

  for (var i = 0; i < arr.length; i++) {
    // this has a time complexity of O(n)
    // 3. calc the needed value in each itteration
    let req = target - arr[i];

    if (map[req] >= 0) {
      if (i > map[req]) return [map[req], i];
      else return [i, map[req]];
    } else map[arr[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
