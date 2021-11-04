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

print(`avg: ${avg.toFixed(2)}`)
print(`below: ${(arr2.join(","))}`)
print(`above: ${(arr3.join(","))}`)