let input = ["2,3,1", "5,2,3"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n1 = gets().split(',')
let n2 = gets().split(',')
let arr = [...n1, ...n2]
let resultArr = []
//let n2=(...n)
//let sorted=n.reverse().join("")

/*for (let i = 0; i < arr.length; i+=3) {
   
 newArr.push(arr[i])
    print(newArr)
}*/
n1.map((element, index) => {
    index % 2 === 0 ?
        resultArr.push(Number(element), Number(n2[index])) :
        resultArr.push(Number(element), Number(n2[index]))
})
print(resultArr)