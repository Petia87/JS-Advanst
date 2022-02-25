let input = ["185"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets()
let first=+n[0]
let second=+n[1]
let third=+n[2]

let a=first*second*third
let b=first+second+third
let c=first+second*third
let d=first*second+third
let max=Math.max(a,b,c,d)
print(max)