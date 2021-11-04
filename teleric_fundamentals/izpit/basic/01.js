let input = ["185"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()

/*function sum(number) {
    let result = number.toString().split("")
    let total = 0
    for (let i = 0; i < result.length; i++) {
        if (isNaN(result[i])) {
            continue
        }
        total +=+result[i];
    }
    return total
}*/

print(n)