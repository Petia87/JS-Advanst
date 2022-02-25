/*4.	Array Rotation
Input	Output
[51, 47, 32, 61, 21], 2	32 61 21 51 47
[32, 21, 61, 1], 4	32 21 61 1
[2, 4, 15, 31], 5	4 15 31 2
Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
Output Print the resulting array elements separated my single space
*/
let input = ["51, 47, 32, 61, 21","2"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",").map(Number)
let num= gets()

for (let i = 0; i <num; i++) {
let first=arr.shift()
arr.push(first)

}
print(arr.join(' '))