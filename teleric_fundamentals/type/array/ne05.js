let input = ["5",
"1,2,3,4,5",
"1,2,8,9,9",
"1,31,1,1,1",
"1,10,8,9,9",
"1,10,1,1,1"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()
let isTrue=true

for (let i = 1; i <= n; i++) {
    let arr = gets().split(',')
    let arr2=[...arr]
    arr2.sort((a,b)=>a-b)
    arr.map((element, index) => {
       if (Number(element)===Number(arr2[index])) {
        isTrue
       } else {
        isTrue=false
       }
    })
      if (isTrue) {
          print(true)
      } else {
        print(false) 
      }  
}




//print(arr)
