let number = +gets();
let result = "";
for (i = 1; i <= number; i++) {
    for (j = i; j < number + i; j++) {
        result += j + ' ';
    }
    print(result)
    result = "";
}