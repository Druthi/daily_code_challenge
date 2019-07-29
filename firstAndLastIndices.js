/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

Example:
Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]
Here is a function signature example:

class Solution:
  def getRange(self, arr, target):
    # Fill this in.

# Test program
arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8]
x = 2
print(Solution().getRange(arr, x))
# [1, 4]
*/

/*
solution 1
function firstAndLastIndices(arr, x){
  let ans = [-1, -1];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === x){
      if(ans[0] === -1){
        ans[0] = i
      }else{
        if(arr[i+1] !== x){
          ans[1] = i;
          break;
        }
      }
    }
  }
  return ans;
}
*/

//solution 2

function firstAndLastIndices(arr, x){
  let ans = [-1, -1];
  let start = 0;
  let end = arr.length-1;
  let first = -1;
  let last = -1;
  while(start < end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid] === x){
      first = mid;
      last = mid;
      break;
    }else if(arr[mid] > x){
      end = mid-1;
    }else{
      start = mid+1;
    }
  }
  while(first >0 || last<arr.length-1){
    if(arr[first-1] !== x && arr[last+1] !== x){
      ans[first, last];
      break;
    }
    if(arr[first-1] ===x){
      first = first-1;
    }
    if(arr[last+1] === x){
      last = last+1;
    }
    ans = [first, last];
  }
  return ans;
}





let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8]
let x = 2
console.log(firstAndLastIndices(arr, 2))
