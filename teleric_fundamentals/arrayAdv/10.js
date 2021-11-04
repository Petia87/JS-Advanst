/*7.	Search for a Number
You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
Examples
Input	Output	Comments
[5, 2, 3, 4, 1, 6],
[5, 2, 3]	"Number 3 occurs 1 times."	First we take 5 elements from the array. Delete the first 2 elements. 
Then we search for the number 3.
*/
let input = ["5, 2, 3, 4, 1, 6","5, 2, 3"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let arr2=gets().split(',').map(Number)
let add=arr2[0]
let dell=arr2[1]
let find=arr2[2]
cound=0
arr.splice(add).splice(0,dell)
for (let i = 0; i < arr.length; i++) {
   if (i===find) {
       cound++
   }
    
}
print(`Number ${find} occurs ${cound} times.`)

