let input = ["1020340567.89"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()

function sum(number) {
    let result = number.toString().split("")
    let total = 0
    for (let i = 0; i < result.length; i++) {
        if (isNaN(result[i])) {
            continue
        }
        total +=+result[i];
    }
    return total
}
while (true) {
    const res = sum(n)
    if (res <= 9) {
        print(res)
        break
    }
    n = res
    //break
}
