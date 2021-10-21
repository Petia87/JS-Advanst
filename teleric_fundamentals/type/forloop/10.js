let input = [6, 9,11,3,2,1,8]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
llet n = +gets();
let current
let max=Number.MIN_SAFE_INTEGER



for (let i = 0; i < n; i++) {
    let next = +gets()
    current=next
    if (max<current) {
        max=current
    }
}