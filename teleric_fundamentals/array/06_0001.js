/*5.	Max Number
Input	Output
[1, 4, 3, 2]	4 3 2
[14, 24, 3, 19, 15, 17]	24 19 17
[41, 41, 34, 20]	41 34 20
[27, 19, 42, 2, 13, 45, 48]	48
Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 
Output
Print all top integers on the console, separated by single space
*/
let input = ["27, 19, 42, 2, 13, 45, 48"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",").map(Number)
let max = []
let isBigger = true
let curr = 0
let next = 0
for (let i = 0; i < arr.length; i++) {
    curr = arr[i]
    next = arr[i + 1]
    if (curr < next) {
        isBigger = false
        max = []
    } else {
        isBigger = true
    }
    if (isBigger) {
        max.push(curr)
    }

}
print(max)