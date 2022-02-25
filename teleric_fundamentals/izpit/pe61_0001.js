/*задача 2810/1: за дадено число което 
ти е входа, намери сумата на всички цифри които са четни

пример: "15248914", отговор: 18
*/

let input = ["-152489,14"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets()
let sum = 0
for (let i = 0; i < n.length; i++) {
    const el = +(n[i])
   print(typeof(el));
    if (isNaN(el)) {
        continue
    }

    if (el % 2 == 0) {
        sum += el
    }

}
print(sum)