/*3.	Rotate Array
Write a function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
Examples
Input	Output
['1', '2', '3', '4', '2']	3 4 1 2
['Banana', 'Orange', 'Coconut', 'Apple', '15']	Orange Coconut Apple Banana
['remove', 'remove', 'remove']	Empty
Hints

*/
let input = ["Banana, Orange, Coconut, Apple, 15"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(",")

let n = arr.pop()
n=Number(n)
//print(arr)

for (let i = 0; i < n; i++) {
arr.unshift(arr.pop())
} 

print(arr)
