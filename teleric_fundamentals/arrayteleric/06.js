let input = ["1,2,2,2,2,18,3,12"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',')
let arr2=[]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!arr2.includes(element)) {
        arr2.push(element)
    }
    
}



print(arr2)
