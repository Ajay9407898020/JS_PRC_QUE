// Given two numbers and the task is to check the given numbers are approximately equal to each other or not. If both numbers are approximately the same then print true otherwise print false.

/*Input:  num1 = 10.3
          num2 = 10

Output: true*/


/*
Approach: To check the numbers are approximately the same or not, first, we have to decide the epsilon value. Epsilon is the maximum difference between two numbers, if the difference of the numbers is less than or equal to epsilon then the numbers are approximately equal to each other. So first we create a function named checkApprox which takes three arguments num1, num2, and epsilon. Now check the absolute difference of num1 and num2 is less than epsilon or not.
*/



let n1 = 10.003;
let n2 = 10.001;
let epsilon = 0.005;
function checkApprox(n1, n2, epsilon) {
    return Math.abs(n1 - n2) <= epsilon;
}

console.log(checkApprox(n1, n2, epsilon))

