const n = parseFloat(prompt('Рекурсія. Введіть значення n '));
function fibonacci(n) {
    let fib;  
    if (n >= 2) {fib = fibonacci(n - 1) + fibonacci(n - 2);} else {fib = n}
 return fib;
}
document.write(fibonacci(n));    
