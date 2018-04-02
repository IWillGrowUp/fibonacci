const n = parseFloat(prompt('Введіть значення n'));
function numberF(n) {
    let first = [1, 1];
    while (first.length < n) {
        let third = first[first.length - 1] + first[first.length - 2];
        first.push(third);
    }
    return (first[first.length - 1] + '<br>' + first);
}
document.write(numberF(n));