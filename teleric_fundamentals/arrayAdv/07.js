/*2.	Distinct Array
You will be given an array of integer numbers on the first line of the input (space-separated). 
Remove all repeating elements from the array. 
Print the result elements separated by single space.
[1, 2, 3, 4]	1 2 3 4
[7, 8, 9, 7, 2, 3, 4, 1, 2]	7 8 9 2 3 4 1
[20, 8, 12, 13, 4, 4, 8, 5]	20 8 12 13 4 5
*/
let input = ["7, 8, 9, 7, 2, 3, 4, 1, 2"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let narr=[]
for (let i = 0; i <arr.length; i++) {
    const el = arr[i];
    if (narr.includes(el)) {
        continue
    }else{
        narr.push(el)
    }
}

print(narr)