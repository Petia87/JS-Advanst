/*7.	Max Sequence of Equal Elements
Write a function that finds the longest sequence of equal elements in an array of numbers. 
Input	Output
[2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	2 2 2
[1, 1, 1, 2, 3, 1, 3, 3]	1 1 1
[4, 4, 4, 4]	4 4 4 4
[0, 1, 1, 5, 2, 2, 6, 3, 3]	1 1
If several longest sequences exist, print the leftmost one.
*/
let input = ["2, 1, 1, 2, 3, 3, 2, 2, 2, 1"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(",").map(Number)
let indexOfBiggestSeq=-1
    let maxSeqLength=0
  
    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        let currentSeqLenhth = 1;
 
 
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);
 
            if (nextEl !== currentEl) {
                    break;
            }
            currentSeqLenhth++
 
        }
        if(currentSeqLenhth>maxSeqLength){
            maxSeqLength=currentSeqLenhth
            indexOfBiggestSeq=i
        }
    }
    let element=arr[indexOfBiggestSeq]
    print(`${element} `.repeat(maxSeqLength).trim())


