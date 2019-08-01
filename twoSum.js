/*
Hi, here's your problem today. This problem was recently asked by Facebook:

You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

Example:
Given [4, 7, 1 , -3, 2] and k = 5,
return true since 4 + 1 = 5.

def two_sum(list, k):
  # Fill this in.

print two_sum([4,7,1,-3,2], 5)
# True

Try to do it in a single pass of the list.
*/

function twoSum(list, sum){
  let cache = {};
  let ans = [];
  for(let i = 0; i < list.length; i++){
    let complement = sum-list[i];
    if(cache[complement]){
      ans = [complement, list[i]];
      break;
    }else{
      cache[list[i]] = true;
    }
  }
  return ans;
}

console.log(twoSum([4,7,1,-3,2], 5));