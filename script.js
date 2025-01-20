// Seleciona o visor e todos os botões
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Variáveis para armazenar valores e operação
let currentInput = '';
let previousInput = '';
let operator = null;

// Função para atualizar o visor
function updateDisplay(value) {
  display.textContent = value;
}

// Adiciona o evento de clique a cada botão
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      // Limpar tudo
      currentInput = '';
      previousInput = '';
      operator = null;
      updateDisplay('0');
    } else if (value === '=') {
      // Calcular o resultado
      if (previousInput && currentInput && operator) {
        const result = calculate(Number(previousInput), Number(currentInput), operator);
        updateDisplay(result);
        previousInput = result;
        currentInput = '';
        operator = null;
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Operadores
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      // Adicionar número ou ponto
      if (value === '.' && currentInput.includes('.')) return;
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

// Função para realizar os cálculos
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 === 0 ? 'Erro' : num1 / num2;
    default:
      return 0;
  }
}