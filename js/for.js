const n = parseFloat(prompt('Введіть значення n'));
function numberF(n) {
    let first = 1;
    let second = 1;
    for (i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}
document.write(numberF(n));