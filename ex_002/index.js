const value = parseInt(process.argv[2]) || 200;

const fibo = (value, arrFibo) => {
    var aux = 0, arrFibo = [0, 1];

    if (value < 2) return true;

    for (let i = 1; aux < value; i++) {
        aux = arrFibo[i];
        aux += arrFibo[i - 1];
        arrFibo.push(aux);
    }

    if (value == aux) return true;
    return false;
}

console.log(
    fibo(value)
        ? `O número ${value} pertence a sequência de Fibonacci.`
        : `O número ${value} NÃO pertence a sequência de Fibonacci.`
);