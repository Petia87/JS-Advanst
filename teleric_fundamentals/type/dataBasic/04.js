/*2.	Prime Number Checker
Write a function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
Input	Output		Input	Output		Input	Output
7	true		8	false		81	false

*/
let input = ["15"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()
if (n===1) {
 print(false)
} else if (n===2) {
    print (true)
} else {
    for (let i = 2; i < n; i++) {
       if (n%i===0) {
       print  (false)
       print  (i)
       }
       
    }
    print (true)
}

