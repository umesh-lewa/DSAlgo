/*
// Getting input via STDIN
Given a string expression examine the correctness of pairs and orders of parantheses using Stack. If it has pair of parentheses print yes else print no

Input Description:
An expression containing various types of Parentheses.

Output Description:
Print yes or no based on the given input

Sample Input :
{([])}
Sample Output :
yes

*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

  let stack = [];
  let possible = true;
  let string = userInput.length > 0 ? userInput[0] : "";

  for(let i = 0; i < string.length; i++) {

      let currentChar = string.charAt(i);

      //if(currentChar === '(' || currentChar === '{' || currentChar === '[') {
      if(currentChar === '(') {
          stack.push(currentChar);
      } else {
          if(currentChar == ')'){
          if(stack.length > 0) {
              //if((currentChar === ')' && stack[stack.length - 1] === '(') || (currentChar === '}' && stack[stack.length - 1] === '{') || (currentChar === ']' && stack[stack.length - 1] === '[')) {
              if((currentChar === ')' && stack[stack.length - 1] === '(') ) {    
                stack.pop();
                  
              } else {
                  possible = false;
              }
          } else {
              possible = false;
          }
        }
      }
  }

  let remainingOpenings = [];
  let remainingClosings = [];

  for(let i = 0 ; i < stack.length ; i++){
    if(stack[i] == '('){
        remainingOpenings.push('(');
    }else{
        remainingClosings.push(')');
    }
  }

  for(let j = 0 ; j < remainingOpenings.length ; j++){
    string = string.replace('(', '');
  }

  for(let j = 0 ; j < remainingClosings.length ; j++){
    string = string.replace(')', '');
  }
  if(possible === true && stack.length === 0) {
      console.log("yes");
  } else {
      console.log("no");
  }
});