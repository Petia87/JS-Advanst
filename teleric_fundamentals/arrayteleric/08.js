let input = ["0,1,0,3,12"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let arr1 = [...arr]
let sum = arr1.reduce((a, c) => a + c)
let avg = sum / arr.length
let arr2 = []
let arr3 = []
for (let i = 0; i < arr.length; i++) {
    const element =+ arr[i];
    if (element < avg) {
        arr2.push(element)
    } else if (element > avg) {
        arr3.push(element)
    }

}
arr4 = [...arr1, ...arr2, ...arr3]


print(`avg: ${avg.toFixed(2)}`)
print(`below: ${(arr2.join(","))}`)
print(`above: ${(arr3.join(","))}`)