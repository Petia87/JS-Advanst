let input = ["0,1,2"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let num = gets().split(",").map(Number)
let num1 = [...num]
let as = [...num].sort((a, b) => a - b)
let des = [...num].sort((a, b) => b - a)
let isAss = false
let IsDess = false
let mixed = false
/*print(num1)
print(as)
print(des)*/
for (let i = 0; i < num.length; i++) {
    const el = num[i];
    const prev = num[i - 1];
    if (el == 0) {
        continue
    }

    if (el == as[i] && prev < el) {
        isAss = true
    } else if (el == des[i] && prev > el) {
        IsDess = true
    } else {
        mixed = true
    }
}

if (mixed === true) {
    print("Mixed");
} else if ((isAss) & (!IsDess)) {
    print("Ascending");
} else if ((IsDess) & (!isAss)) {
    print("Descending");
} else {
    print("Mixed");
}


/*if (isAss) {
    print('Ascending')
} else if (IsDess) {
    print('Descending')
} else {
    print('Mixed')
}
*/


