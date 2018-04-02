const n = parseFloat(prompt('Введіть значення n'));
function numberF(n) {
    let first = [1, 1];
    do {
        let third = first[first.length - 1] + first[first.length - 2];
        first.push(third);
    }
    while (first.length < n);
    return (first[first.length - 1] + '<br>' + first);
}
document.write(numberF(n));