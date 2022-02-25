/*input: 1 line
If any number in the list is equal to the previous number multiplied by two, 
then print "special". Otherwise print "ordinary".

example: "2,3,5,6,12,8,9"
answer: "special"

example: "1,2,3,4,5,6,7,8,9"
answer: "ordinary"*/


let input = ["2,3,5,6,6,8,9"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number)
let previous;
let isOrdinary=false

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el===previous*2) {
        isOrdinary=true
    } 
    previous=el
}
if (isOrdinary) {
    print(`special`)
}else{
    print(`ordinary`)
}
