/*4.	Amazing Numbers
Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
    "{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
Examples
Input	Output
1233	1233 Amazing? True
999	999 Amazing? False
 */

let input = ["1233"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets()
sum = 0
/*for (let i = 0; i < n.length; i++) {
   sum+=+n[i]
}
let result=sum.toString()
if (result.includes('9')) {
    print(true)
} else {
   print(false)
}*/
let current = 0
let isAmazing = false
while (n > 0) {
    current = n % 10
    sum += current
    n = Math.trunc(n / 10)
}
while (sum>0) {
    current=sum%10
    if (current==9) {
        isAmazing=true
        break
    } else {
        sum = Math.trunc(n / 10)
    }
    
}
print((`${n} Amazing? ${isAmazing ? "True" : "False"}`)   )