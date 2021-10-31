/*4.	Sorting
Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
Input	Output
[1, 21, 3, 52, 69, 63, 31, 2, 18, 94]	94 1 69 2 63 3 52 18 31 21
*/
let input = ["1, 21, 3, 52, 69, 63, 31, 2, 18, 94"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let sortArr=arr.sort((a,b)=>b-a)
let copyarr=sortArr.slice(0)
let finarr=[]
for (let i = 0; i < copyarr.length; i++) {
    if (i%2===0) {
       finarr.push(sortArr.shift())
    } else {
        finarr.push(sortArr.pop())
    }
    }


print(finarr)
