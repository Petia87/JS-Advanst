//let input = [4]
let input = [4,'1','1','1','1']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n= +gets();
let num=0
let next

for (let i = 0; i <n; i++) {
   next=+gets()
   num+=next
  
    
}
let av=num/n
print(av.toFixed(2))