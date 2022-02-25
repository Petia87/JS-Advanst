let a = +gets()
let b = +gets()
let c = +gets()
//print(a,b,c)


    if (a >= b && b >= c) {
        print(a,b,c)
    } else if (a >= c && c>= b) {
        print(a,c,b)
    } else if (b >= a && a >= c) {
        print(b,a,c)
    } else if (b >= c && c >= a) {
        print(b,c,a)
    } else if (c >= a && a>= b) {
        print(c,a,b)
    } else if (c >= b && b>= a) {
        print(c,b,a)
    }