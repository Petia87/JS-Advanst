let input = ["-7231"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets()
let sum = 0

do {
    let sum = 0 
    for (let i = 0; i < n.length; i++) {
        let digit=+n[i]
        if (isNaN(n[i])) {
            continue
        }
        sum += digit
    } 
    n=sum.toString()
} while (n.length>1)
  print(n)


