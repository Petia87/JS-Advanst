let input = [2,50,40]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n= +gets();


for (let i = 0; i <n; i++) {
   let next=+gets()
    print((next-next*0.65).toFixed(2))
}
    