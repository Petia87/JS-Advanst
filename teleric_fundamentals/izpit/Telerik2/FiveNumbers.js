let input = ["30", "42", "70", "35", "90"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let num1 = +gets()
let num2 = +gets()
let num3 = +gets()
let num4 = +gets()
let num5 = +gets()
let counter = 0
let result = 0



while (counter<3) {
    result++
    if (result % num1 == 0) {
        counter++
    }
    if (result % num2 == 0) {
        counter++
    }
    if (result % num3 == 0) {
        counter++
    }
    if (result % num4 == 0) {
        counter++
    }
    if (result % num5 == 0) {
        counter++
    }

    if (counter < 3)
        counter = 0
}
print(result)