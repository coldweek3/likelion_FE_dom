const buttons = document.querySelectorAll('#number');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const result = document.getElementById('result');
        const value = button.textContent;

      result.value += value;
    });
});
