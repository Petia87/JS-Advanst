let n = +gets();
let current
let max3=Number.MIN_SAFE_INTEGER
let max2 =Number.MIN_SAFE_INTEGER
let max1=Number.MIN_SAFE_INTEGER

for (let i = 0; i < n; i++) {
    let next = +gets()
    current=next
    //if (max1>max2>max3) {
        
   
    if (current>=max1) {
        max3=max2
        max2=max1
        max1=current
    } else if (current>= max2 && current<max1) {
        max3 = max2;
        max2 = current;
        } else if (current>= max3 && current<max2) {
        max3 = current;
        }
   // }
}
print(`${max1}, ${max2} and ${max3}`)