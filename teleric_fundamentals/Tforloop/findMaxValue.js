let n = +gets();
let current
let max=Number.MIN_SAFE_INTEGER



for (let i = 0; i < n; i++) {
    let next = +gets()
    current=next
    if (max<current) {
        max=current
    }
}
print(max)