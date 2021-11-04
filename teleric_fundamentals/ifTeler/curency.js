let price = +gets()
let lv = +gets()

let result = (lv - price) * 100

let stEd = parseInt(result % 10)
let stDes = parseInt((result / 10) % 100)
let lvv = parseInt((result / 100) % 100)
//print(stEd)
//print(stDes)
//print(lvv)
if (lvv == 9) {
    print(`1 x 5 leva`)
    print(`2 x 2 leva`)
        
} else if (lvv == 8) {
    print(`1 x 5 leva`),
    print(`1 x 2 leva`)
        print(`1 x 1 lev`)
} else if (lvv == 7) {
    print(`1 x 5 leva `)
    print(`1 x 2 leva`)
        
} else if (lvv == 6) {
    print(`1 x 5 leva`)
    print(`1 x 1 leva`)
       
} else if (lvv == 5) {
    print(`1 x 5 leva`)
} else if (lvv == 4) {
    print(`2 x 2 leva`)
} else if (lvv == 3) {
    print(`3 x 1 lev`)

} else if (lvv == 2) {
    print(`1 x 2 leva`)
} else if (lvv == 1) {
    print(`1 x 1 lev`)
} 

if (stDes == 9) {
    print(`1 x 50 stotinki`)
    print(`2 x 20 stotinki`)

} else if (stDes == 8) {
    print(`1 x 50 stotinki`),
        print(`1 x 20 stotinki`),
        print(`1 x 10 stotinki`)
} else if (stDes == 7) {
    print(`1 x 50 stotinki`)
    print(`1 x 20 stotinki`)
       
} else if (stDes == 6) {
    print(`1 x 50 stotinki`)
    print(`1 x 10 stotinki`)
     
} else if (stDes == 5) {
    print(`1 x 50 stotinki`)
} else if (stDes == 4) {
    print(`2 x 20 stotinki`)
} else if (stDes == 3) {
    print(`3 x 10 stotinki`)
} else if (stDes == 2) {
    print(`1 x 20 stotinki`)
} else if (stDes == 1) {
    print(`1 x 10 stotinki`)
}



if (stEd == 9) {
    print(`1 x 5 stotinki`)
    print(`2 x 2 stotinki`)

} else if (stEd == 8) {
    print(`1 x 5 stotinki`),
        print(`1 x 2 stotinki`),