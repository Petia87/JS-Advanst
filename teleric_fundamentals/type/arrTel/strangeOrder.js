let arr = gets().split(',')
let arr1=[]
let arr2=[]
let arr3=[]
let arr4=[]
for (let i = 0; i < arr.length; i++) {
    const element =+ arr[i];
    if (element<0) {
        arr1.push(element)
    }else if (element==0) {
        arr2.push(element)
    }else if (element>0) {
        arr3.push(element)
}
}
arr4=[...arr1,...arr2,...arr3]


print(arr4)