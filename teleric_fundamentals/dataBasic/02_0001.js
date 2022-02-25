/*8.	Special Numbers
Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).
A number is special when its sum of digits is 5, 7 or 11
Input	Output
15	1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
Hints
To calculate the sum of digits of given number num, you might repeat the following: sum the last digit (num % 10) and remove it (sum = sum / 10) until num reaches 0. Use parseInt() while dividing to get only integer numbers
*/
let input = ["15"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets()
sum = 0
for (let i = 1; i <= n; i++) {
    i = i.toString()
    for (let j = 0; j < i.length; j++) {
        sum += Number(i[j]);

        if (sum == 5 || sum == 7 || sum == 11) {
            print(`${sum}-special`)
        } else {
            print(`${sum}-not special`)
        }
        sum = 0
    }
}