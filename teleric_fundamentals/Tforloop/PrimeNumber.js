let n = +gets();
let current

for (let i = 2; i <= n; i++) {
   
    while (n%i==0) {
        n/=i
        print(i)
    }
}