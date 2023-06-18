const numberButtons = document.querySelectorAll('#number');
const operatorButtons=document.querySelectorAll('.operator')
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');
const resetButton = document.querySelector('#reset');
const resultElement = document.getElementById('result');

let currentResult = ''; // 현재 결과 값

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
  });
});

// 소수점 버튼 클릭 시
dotButton.addEventListener('click', () => {
  if (!currentResult.includes('.')) {
    currentResult += '.';
    resultElement.value = currentResult;
  }
});

// 리셋 버튼 클릭 시
resetButton.addEventListener('click', () => {
  currentResult = '';
  resultElement.value = '';
});

equalButton.addEventListener('click', () => {
  const expression = currentResult;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    console.log('계산 오류:', error);
    result = '오류';
  }

  resultElement.value = result;
  currentResult = result.toString();
});
