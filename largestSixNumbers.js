// Q. Find the largest 6 numbers from a large unsorted array of 100,000 integers. You cannot modify the input array.

// Sample input: [2,7,3,4,6,9,2,3,16,23,76,43,13,98,43,123,43,99,56,87,98,65,54,36];
// Expected Output: [123, 99, 98, 98, 87, 76]

function findLargestSixIntegers(arr){
  let largest = [];
  for(let i=0;i<6; i++){
      largest.push(arr[i]);
  }
  largest.sort((a,b) => a-b);
  for(let j=6;j<arr.length;j++){
      if(arr[j] > largest[0]){
          largest[0] = arr[j];
          largest.sort((a,b) => a-b);
      }
  }
  return largest;
}

// Time complexity - O(n), Space - O(1)

let arr = [2,7,3,4,6,9,2,3,16,23,76,43,13,98,43,123,43,99,56,87,98,65,54,36];
//console.log(findLargestSixIntegers(arr));