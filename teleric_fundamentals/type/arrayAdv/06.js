/*6.	Smallest Two Numbers
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
Input	Output		Input	Output
[30, 15, 50, 5]	5 15		[3, 0, 10, 4, 7, 3]	0 3
The output is printed on the console on a single line, separated by space.*/
let input = ["30, 15, 50, 5"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let min=arr.sort((a,b)=>a-b).slice(0,2)

print(min)