/*задача: 2810/2: входа е един стринг от числа, разделени със запетайки, 
числата могат да са положителни и отрицателни, представляват колко метра изкачваш 
или слизаш докато се разхождаш в планината. Например "1,1,-2,3" означава че се изкачваш 
1 метър, после пак 1 метър, после слизаш 2 метра, после се изкачваш пак 3 метра.
 Започвайки от денивелация 0 метра, намери за така описания маршрут колко 
 е най високата и най-ниската точка през която минаваш на разходката си
 "2,2,2,2,-20", отговор: най-висока: 8, най-ниска: -12
 
 
 */

let input = ["2,2,2,2,-20"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split(",").map(Number)
let min = 0
let max = 0
let h = 0

for (let i = 0; i < n.length; i++) {
  const el = +n[i];
  
  h += el
  if (h > max) {
    max = h
  } else if (h < min) {
    min = h
  }
}
print(max)
print(min)