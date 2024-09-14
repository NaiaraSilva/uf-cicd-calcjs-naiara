//Função d adição
function add(a,b) {
    return a + b;
}

//Exportar Função
module.exports = {
    add
};
//Função sub
function subtract(a,b) {
    retun a - b;
}
//Exportar Função
module.exports = {
    add,
    subtract
};

//Função de mult
function multiply(a,b) {
    return a * b;
}
//exportar Função
module.exports = {
    add,
    subtract,
    multiply
};
// Função de potenciação
function power(base, exponent) {
return Math.pow(base, exponent);
}
// Exportar as funções
module.exports = {
add,
subtract,
multiply,
power
};