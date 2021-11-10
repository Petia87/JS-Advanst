let input = ["256", "768"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let num1 = +gets()
let num2 = +gets()
let isGood = true
let count = 0
let fin = 0
while (num1 <= num2) {

    const elToStr = num1.toString();
    for (let j = 0; j < elToStr.length; j++) {
        const num = +elToStr[j];
        if (num == 0) {
            continue
        }

        if (num1 % num != 0) {
            isGood = false
            break
        }else{
            isGood = true
        }
    }
    if (isGood) {
        count++

    }
    num1 += 1
}


print(count)