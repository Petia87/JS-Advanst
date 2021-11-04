let input = ["Tempera#### na @#$ata 23 grad#%&"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let text = gets()
let max = 0


let regex = /[A-Za-z0-9 ]+/g;
let count = 0
//let containsValidDate = regex.test(text);

isRegex = false
for (let i = 0; i < text.length; i++) {
    let el = text[i]
    //let matches = text.match(regex);
    if (el.match(regex)) {
        isRegex = true
        
    } else {
        count++
    }
if ( isRegex && max < count ) {
    max = count
    count = 0
   
} 

}
print (max)