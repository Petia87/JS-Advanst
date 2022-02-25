/*Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained. 
Examples
For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
Input	Output	Comments
[2,10,3]	25	2 10 3  2+10 10+3  12 13  12 + 13  25
[5,0,4,1,2]	35	5 0 4 1 2  5+0 0+4 4+1 1+2  5 4 5 3  5+4 4+5 5+3  9 9 8  9+9 9+8  18 17  18+17  35
[1]	1	1 is already condensed to number
Hints
While we have more than one element in the array nums[], repeat the following:
•	Allocate a new array condensed[] of size nums.Length-1.
•	Sum the numbers from nums[] to condensed[]:
o	condensed[i] = nums[i] + nums[i+1]
•	nums[] = condensed[]
The process is illustrated below:
*/
let input = ['2,10,3']
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').map(Number)

let arr1=[]
while(arr.length>1){
    for (let i = 0; i < arr.length-1; i++) {
        arr1.push(arr[i]+arr[i+1])
    }
    arr=arr1
    arr1=[]

    
}
print(arr[0])