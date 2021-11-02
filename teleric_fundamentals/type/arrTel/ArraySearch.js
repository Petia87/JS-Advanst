let input = ["1,1,1,1,1"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)

let arr3=[]
for (let i = 1; i <= arr.length; i++) {
    let el=i
    if (!arr.includes(el)) {
        arr3.push(el)
    } 
}

print(arr3)

//----------------------------------------
let arr = gets().split(',').map(Number)
let arr2 = []

num=0
for (let i = 1; i <= arr.length; i++) {
    const element =+ arr[i];
    num=+i
    if (element!=num && !arr2.includes(num) && !arr.includes(num)) {
        arr2.push(num)
    }

}

print(arr2)