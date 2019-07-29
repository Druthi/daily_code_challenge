/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a string, find the length of the longest substring without repeating characters.

Here is an example solution in Python language. (Any language is OK to use in an interview, though we'd recommend Python as a generalist language utilized by companies like Google, Facebook, Netflix, Dropbox, Pinterest, Uber, etc.,)

class Solution:
  def lengthOfLongestSubstring(self, s):
    # Fill this in.

print Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx')
# 10

Can you find a solution in linear time?
*/


function longestSubstring(str){
  let longest = 0;
  let ctr = 0;
  let prev ={};
  let current = null;
  for(let i = 0; i<str.length; i++){
    current = str.charAt(i);
    if(prev[current] === undefined){
      ctr++;
      prev[current] = i;
      longest = longest < ctr?ctr:longest;
    }else{
      ctr = 0;
      i = prev[current];
      prev = {};
    }
  }
  return longest;
}

console.log(longestSubstring('abrkaabcdefghijjxxx'));