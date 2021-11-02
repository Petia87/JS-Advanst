let input = ["anagram", "6", "gramana,aaagrnm,anagra,margana,abc,xy"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let word = gets()
let num = + gets()
let difWord = gets().split(',')

let isInclude = false

for (let i = 0; i < num; i++) {
    let arr = difWord[i]
  
    if (word.length != arr.length) {
        isInclude = false
    } else {
        for (let j = 0; j < arr.length; j++) {
            const el = arr[j];
            if (word.includes(el)) {
                isInclude = true
            } else {
                isInclude = false
            }
        }
    }

    if (isInclude) {
        print("Yes")
    } else {
        print("No")
    }
}


