let a= +gets()
let num=""

for (let i = 1; i <= a; i++) {
    if (i%3==0) {
      continue  
    }
    if (i%7==0) {
        continue  
      }
    num+=i+" "
   }
print(num)