let n= +gets();
let sum=0;
let min;
let max;

for (let i = 1; i <=n; i++) {
   let next=+gets()
   let current=next
   sum=sum+next
   if (i===1) {
      min= current
      max=current
   }
  
  
    if (current>max) {
        max = current
    } else if(current<min) {
        min = current 
    }
}
let avg=sum/n


print(`min=${min.toFixed(2)}`)
print(`max=${max.toFixed(2)}`)
print(`sum=${sum.toFixed(2)}`)
print(`avg=${avg.toFixed(2)}`)