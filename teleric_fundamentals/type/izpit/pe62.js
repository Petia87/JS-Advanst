/*задача: 2810/2: входа е един стринг от числа, разделени със запетайки, 
числата могат да са положителни и отрицателни, представляват колко метра изкачваш 
или слизаш докато се разхождаш в планината. Например "1,1,-2,3" означава че се изкачваш 
1 метър, после пак 1 метър, после слизаш 2 метра, после се изкачваш пак 3 метра.
 Започвайки от денивелация 0 метра, намери за така описания маршрут колко 
 е най високата и най-ниската точка през която минаваш на разходката си
 "2,2,2,2,-20", отговор: най-висока: 8, най-ниска: -12
 
 
 */

 let input = ["-5,-5,-5,-5,5"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split(",").map(Number)
let min=0
let max=0
let prev=0
let h = 0
let sum1=0
let sum2=0
let h1 = 0
let h2 = 0
  for (let i = 0; i < n.length; i++) {
      const el = +n[i];
      
      if (el>=0) {
          sum1+=el
          h+=el
          if (prev>0) {
              max+=el
              h1=max
          }else{
              h1=max
              max=0
          }
      } else{
         h+=el
         sum2+=el
         if (prev<0) {
            min+=el
            h2=min
        }else{
           
            min=0
        }
        prev=el
      } 
  }
  print(h)
  print(sum1)
  print(sum2)
  print(max)
  print(min)
  print(h1)
  print(h2)
  //В случай, че се брои първата  точка от 0, 
  /*if (sum1+sum2<0) {
    print(`hmax=${sum1}`)
    print(`hmin=${sum2+sum1}`)
  } else if(sum1<0){
    print(`hmax=${0}`)
    print(`hmin=${sum2+sum1}`)
  } else if(sum2>0){
    print(`hmax=${sum1}`)
    print(`hmin=${0}`)
  }else if(sum1+sum2>0){
    print(`hmax=${sum1}`)
    print(`hmin=${0}`)
  }*/