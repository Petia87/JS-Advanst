let input = ["2,3,1"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split('')

//let n2=(...n)
let sorted=n.reverse().join("")
print(sorted)