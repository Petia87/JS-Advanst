function solve([arg]) {
    let n = Number(arg);
    console.log("*" + "*".repeat(n - 2) + "*");
    for (let i = 0; i < (n - 2); i++) {
        console.log("*" + "*".repeat(n - 2) + "*");
    }
    console.log("*" + "*".repeat(n - 2) + "*");
}
solve([5])
