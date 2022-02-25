function solution(number) {
    return (y) => y + number;
}
/* input*/
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
