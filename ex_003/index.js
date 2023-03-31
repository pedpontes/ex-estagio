
//sequencia letra a (soma-se 2 ao valor corrente)
const a = () => {
    let arr = [1], len = 4;

    for (let i = 0; i < len; i++) arr.push(arr[i] + 2);
    return arr[len];
}

//sequencia letra b (potenciação de 2)
const b = () => {
    let arr = [2], len = 6;

    for (let i = 0; i < len; i++) arr.push(arr[0] * arr[i]);
    return arr[len];
}
//sequencia letra c (soma-se 2 à diferença entre o valor corrente e anterior)
const c = () => {
    let len = 7, arr = [0], aux = 1;

    for (let i = 0; i < len; i++) {
        arr.push(arr[i] + aux);
        aux += 2;
    }
    return arr[len];
}
//sequencia letra d (soma-se 8 à diferença entre o valor corrente e anterior)
const d = () => {
    let len = 5, arr = [0], aux = 4;

    for (let i = 0; i < len; i++) {
        arr.push(arr[i] + aux);
        aux += 8;
    }
    return arr[len];
}
//sequencia letra e (fibonacci)
const e = () => {
    let len = 7, arr = [0, 1], aux = 0;

    for (let i = 1; i < len; i++) {
        aux = arr[i];
        aux += arr[i - 1];
        arr.push(aux);
    }
    return arr[len];
}

console.log("a) " + a());
console.log("b) " + b());
console.log("c) " + c());
console.log("d) " + d());
console.log("e) " + e());