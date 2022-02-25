let input = ["4", "12", "23", "34", "45"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let num = +gets()
let prev = 0
let arr = []
let merge = []
let squash = []

for (let i = 0; i < num; i++) {
    let number = gets()
    arr.push(number)
}
for (let i = 1; i < num; i++) {
 prev = arr[i - 1]
 curr = arr[i]
   

//Merge
let a = prev[1]
let b = curr[0]

merge.push(a + b)
//Squash
let a1 = prev[0]
let b1 = (+prev[1] + (+curr[0]))%10
let c1 = curr[1]
squash.push(a1 + b1 + c1)
}

  

print(merge.join(" "))
print(squash.join(" "))