let input = [2]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let result = "";
for (i = 1; i <= number; i++) {
    for (j = i; j < number + i; j++) {
        result += j + ' ';
    }
    print(result)
    result = "";
}
