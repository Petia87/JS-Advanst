/*4.	Non-Decreasing Subsequence
Write a function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
Input	Output
[ 1, 3, 8, 4, 10, 12, 3, 2, 24]	1 3 8 10 12 24
[ 1, 2, 3, 4]	1 2 3 4
[ 20, 3, 2, 15, 6, 1]	20
Input The input comes as array of numbers.
Output
The output is the processed array after the filtration, which should be a non-decreasing subsequence. The elements should be printed on one line, separated by a single space.
Hints*/

let input = ["1, 3, 8, 4, 10, 12, 3, 2, 24"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(",").map(Number)
let max=0
let newArr=[]

for (let i = 0; i < arr.length; i++) {
    const el= arr[i];
    if (max<el) {
        newArr.push(el)
    }
    max=el
}

print(newArr)