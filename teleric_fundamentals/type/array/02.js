/*7.	Equal Arrays
Write a program which receives two string arrays and print on the console whether they are identical or NOT. 
Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message: 
'Arrays are identical. Sum: {sum}'
 If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
 'Arrays are not identical. Found difference at {index} index'.
Examples
Input	Output
['10','20','30'], ['10','20','30']	Arrays are identical. Sum: 60
['1','2','3','4','5'], ['1','2','4','4','5']	Arrays are not identical. Found difference at 2 index
['1'], ['10']	Arrays are not identical. Found difference at 0 index
*/
let input = ['10,20,30','10,20,30']
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",").map(Number)
let arr2=gets().split(",").map(Number)
let sum=0
isEgual=true
arr.map((i)=>arr[i]===arr2[i]?sum+=i:isEgual=false)
if (isEgual) {
    print(sum)
} else {
    print('Not equal')
}
