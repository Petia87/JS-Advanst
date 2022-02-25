let input = ["5,3,2,1", "2"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',')
let n = +gets()

let resultArr = [...arr]

for (let i = 1; i <=n; i++) {
    let element=arr.shift()
    arr.push(element)
}
print(arr.join(" "))
