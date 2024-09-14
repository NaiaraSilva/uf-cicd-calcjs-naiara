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
//Função div
function divide (a, b){
if (b === 0){
    throw new error("diviso por zero nao é permitida");
}
return a / b;
}