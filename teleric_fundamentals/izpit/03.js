let input = ["275", "693", "110", "742"]
const el = []
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0
while (true) {
    let num = gets()
    let first = +num[0]
    let second = +num[1]
    let last = +num[2]
    let isBalanced = (first + last) === second
    if (isBalanced) {
        sum += +num
    } else {
        break
    }
}


print(sum)
