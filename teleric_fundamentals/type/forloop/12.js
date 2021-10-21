let input = [12]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let current




for (let i = 2; i <= n; i++) {
   
    while (n%i==0) {
        
        n/=i
        print(n)
        print(i)
   }
}

print(12%2)
print(6%2)
