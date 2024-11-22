// Seleciona o campo de resultado
const resultado = document.getElementById('resultado');

// Insere valores no display
function insert(valor) {
    if (resultado.textContent === '0' || resultado.textContent === 'Erro') {
        resultado.textContent = valor; // Substitui o 0 inicial
    } else {
        resultado.textContent += valor; // Adiciona os números/operadores
    }
}

// Limpa o display
function clean() {
    resultado.textContent = '0';
}

// Remove o último caractere
function back() {
    if (resultado.textContent.length > 1) {
        resultado.textContent = resultado.textContent.slice(0, -1);
    } else {
        resultado.textContent = '0';
    }
}

// Calcula o resultado
function calcular() {
    try {
        const expressao = resultado.textContent.replace('X', '*'); // Corrige o operador de multiplicação
        resultado.textContent = eval(expressao); // Avalia a expressão
    } catch (error) {
        resultado.textContent = 'Erro'; // Mostra erro se a expressão for inválida
    }
}
