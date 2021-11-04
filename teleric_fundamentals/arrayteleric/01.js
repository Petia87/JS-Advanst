let input = ["2, 3, 1, 5, 6"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split(',').map(Number)


let sorted=n.sort((a,b)=>b-a)
print(sorted)