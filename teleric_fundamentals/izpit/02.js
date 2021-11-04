let input = ["10","10"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let num=+gets()
for (let i = 0; i < n; i++) {
    let line = ""
   
    for (let j = 0; j <i; j++) {
       
        line += "*" + " "
    }
    print(line)

}
