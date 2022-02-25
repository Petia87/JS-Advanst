/*2.	Common Elements
Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array
Input	Output
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']	hello
4
['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']	o 
i

*/
let input = ["'Hey', 'hello', 2, 4, 'Peter', 'e'","['Petar', 10, 'hey', 4, 'hello', '2']"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let arr = gets().split(",")
let arr2=gets().split(",")
arr3=[]
arr.map((i)=>arr2.includes(i)?print(i):isEgual=false)
