/*
Hi, here's your problem today. This problem was recently asked by Uber:

Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.

Example:
Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False
class Solution:
  def isValid(self, s):
    # Fill this in.

# Test Program
s = "()(){(())"
# should return False
print(Solution().isValid(s))

s = ""
# should return True
print(Solution().isValid(s))

s = "([{}])()"
# should return True
print(Solution().isValid(s))

*/

/*
space: O(n)
time: O(n)
*/

function balancedParams(str){
  if(str.length === 0){
    return true;
  }
  let brackets = {
    '(':')',
    '[':']',
    '{':'}'
  };
  let str_arr = str.split('');
  let stack = [];
  let isValid = true;
  for(let i = 0; i<str_arr.length ; i++){
    let ch = str_arr[i];
    if(ch === '(' || ch === '[' || ch === '{'){
      stack.push(ch);
    }else{
      if(stack.length === 0){
        isValid = false;
        break;
      }else if(brackets[stack.pop()] !== ch){
        isValid = false;
        break;
      }
    }
  }
  if(stack.length > 0){
    isValid = false;
  }
  return isValid;
}

console.log(balancedParams(""))