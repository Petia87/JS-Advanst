/*1.	Sum Digits
Write a function which will be given a single number. Your task is to find the sum of its digits.
Input	Output
245678	32
97561	28
543	12
*/
let input = ["245678"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets()
sum = 0
for (let i = 0; i < n.length; i++) {
    sum+=+(n[i])
}
print(sum)