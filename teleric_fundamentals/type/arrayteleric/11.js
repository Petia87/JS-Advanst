

let input = ["0,15,30"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
arr.forEach(x=>print(x* 1.8 + 32))
