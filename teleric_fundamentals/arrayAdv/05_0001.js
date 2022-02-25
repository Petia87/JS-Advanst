/*4.	Last K Numbers Sequence
You are given two integers n and k. Write a function that generates and prints the following sequence:
•	The first element is 1.
•	Every following element equals the sum of the previous k elements.
•	The length of the sequence is n elements.
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.*/
let input = ["10, 15, 20, 25"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let odd=arr.filter((value,index)=>index%2==1)
let result=odd.map(i=>i*2).reverse()
print(result)