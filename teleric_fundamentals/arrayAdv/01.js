/*	Negative or Positive Numbers
Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
*/
let input = ["7,-2,8,9"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let arr2 = []
let arr3 = []
let fin = []
for (let i = 0; i < arr.length; i++) {
    const el = + arr[i];
    if (el >= 0) {
        arr2.push(el)
    } else {
        arr3.push(el)
    }

}
fin = [ ...arr3,...arr2]

print(fin)

/*function solve(input){
    let result=[]
    for (const number of input) {
        if (number>=0) {
            result.push(number)
        } else {
            result.unshift(number)
        }
    }
    for (const element of result) {
        console.log(element)
    }
}
solve([7, -2, 8, 9])
*/