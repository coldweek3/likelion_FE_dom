const numberButtons = document.querySelectorAll('.number');
const operatorButtons=document.querySelectorAll('.operator')
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('#equal');
const resetButton = document.querySelector('#reset');
const resultElement = document.getElementById('result');

let currentResult = ''; 
let currentOperator = ''; 

// 숫자버튼
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    currentResult += value;
    resultElement.value = currentResult;
  });
});

// 연산자버튼
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    currentResult += operator;
    resultElement.value = currentResult;
    currentOperator = operator;
  });
});

// 소수점 버튼 
dotButton.addEventListener('click', () => {
  if (!currentResult.includes('.')) {
    currentResult += '.';
    resultElement.value = currentResult;
  }
});

// 리셋 버튼 
resetButton.addEventListener('click', () => {
  currentResult = '';
  resultElement.value = '';
});

// 등호 버튼
equalButton.addEventListener('click', () => {
  if (currentOperator !== '') {
    const numbers = currentResult.split(currentOperator);
    if (numbers.length === 2) {
      const num1 = parseFloat(numbers[0]);
      const num2 = parseFloat(numbers[1]);
      let result;

      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }

      resultElement.value = result;
      currentResult = result.toString();
    }
  }
});