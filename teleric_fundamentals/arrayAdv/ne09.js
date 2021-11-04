/*6.	Bomb Numbers
Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.
Examples
Input	Output	Comments
[1, 2, 2, 4, 2, 2, 2, 9],
[4, 2]	12	Special number is 4 with power 2. After detontaion we are left with the sequence [1, 2, 9] with sum 12.
[1, 4, 4, 2, 8, 9, 1],
[9, 3]	5	Special number is 9 with power 3. After detontaion we are left with the sequence [1, 4] with sum 5. Since the 9 has only 1 neighbour to the right we remove just it (one number instead of 3).
[1, 7, 7, 1, 2, 3],
[7, 1]	6	Detonations are performed from left to right. We could not detonate the second occurance of 7 because its already destroyed by the first occurance. The numbers [1, 2, 3] survive. Their sum is 6.
[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1]	4	The red and yellow numbers disappear in two sequential detonations. The result is the sequence [1, 1, 1, 1]. Sum = 4.
*/
let input = ["1, 2, 2, 4, 2, 2, 2, 9", "4, 2"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let numbers= gets().split(',').map(Number)
let spec = numbers[0]
let pow = numbers[1]

while (arr.includes(spec)) {
    let i=arr.indexOf(spec)
    let elToRemove=pow*2+1
    let start=i-pow
    if (start<0) {
        elToRemove+=start
    }
       arr.splice(start,elToRemove)

}
   



print(arr.reduce((a, b) => a + b, 0))
