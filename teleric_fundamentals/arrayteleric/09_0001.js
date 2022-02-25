let input = ["0,1,0,3,12"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let arr2 = []
let arr3 = []
for (let i = 0; i < arr.length; i++) {
    const element =+ arr[i];
    if (element !=0) {
        arr2.push(element)
    } else {
        arr3.push(element)
    }

}
arr4 = [ ...arr2, ...arr3]


print(arr4)
