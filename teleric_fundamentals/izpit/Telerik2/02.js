let input = ["100,200"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let num = gets().split(",")
let num1=num[0]
let num2=num[1]
let rev1=num1.split("").reverse().join("")
let rev2=num2.split("").reverse().join("")
print(Math.max(rev1,rev2))
