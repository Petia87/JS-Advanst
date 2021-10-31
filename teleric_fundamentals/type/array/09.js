/*8.	Magic Sum
Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
Input	Output
[1, 7, 6, 2, 19, 23],
8	
1 7
6 2
[14, 20, 60, 13, 7, 19, 8],
27	
14 13
20 7
19 8
[1, 2, 3, 4, 5, 6],
6	
1 5
2 4
*/
let input = ["14, 20, 60, 13, 7, 19, 8", "27"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(",").map(Number)
let num = gets()


for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr.length; j++) {

        let current = Number(arr[i]);
        let next = Number(arr[j]);

        if (current + next == num) {
            print(`${current}  ${next}`)
        }
    }
}



