let input = [5,2,1,1,6,3]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n= +gets();
let sumOdd=1
let sumEven=1


for (let i = 0; i <n; i++) {
   let next=+gets()
   let current=next
   if (i%2!==0) {
    sumOdd*=current
   } else {
    sumEven*=current
   }
}
if (sumOdd!=sumEven) {
    print(`no ${sumEven} ${sumOdd}`)
   
} else {
    print(`yes ${sumEven} `)
}