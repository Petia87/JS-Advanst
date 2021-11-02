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