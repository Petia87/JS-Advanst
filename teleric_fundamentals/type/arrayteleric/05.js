let input = ["3",
"1,2,3,4,5",
"1,2,8,9,9",
"-4,-3,-2,-1,0"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()
let isSorted = true
//let el;
//let previous

for (let i = 1; i <= n; i++) {
  let arr = gets().split(',').map(Number)
  //let arr2=[...arr].sort((a,b)=>a-b)
  
  for (let j = 0; j < arr.length; j++) {
   if (j===0) {
     continue
   }
    let el = +arr[j];
    let prev=+arr[j-1]
      if (el<prev) {
       isSorted = false
        print(false)
        break        
      }
    
  }

  if (isSorted) {
    print(true)
  } 
  isSorted = true
}


//print(arr)

/*for (let i = 1; i <= n; i++) {
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
}*/