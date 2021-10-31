/*4.	Reverse an Array of Strings
Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements. 
*/
let input = ["'a', 'b', 'c', 'd', 'e'"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = [...gets()]
let lastIndex=arr.length-1
for (let i = 0; i < arr.length/2; i++) {
let temp=arr[i]
arr[i]=arr[lastIndex-i]
arr[lastIndex-i]=temp


}
print(arr.join(''))