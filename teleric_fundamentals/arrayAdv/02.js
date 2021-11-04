/*Write a function that prints the first k and the last k elements from an array of numbers.
The input comes as array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed.
Input	Output		Input	Output*/
let input = ["2,7,8,9"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let k=arr[0]

let firstEl=arr.slice(1,k+1)
print(firstEl.join(" "))
    let lastEl=arr.slice(-k)
    print(lastEl.join(" "))



