const Display = document.getElementById('Display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.getAttribute('data-input');
        const operation = button.getAttribute('data-operation');

        if (input !== null) {
            currentInput += input;
            Display.value = currentInput;
            
        }

        else if (operation) {
            if (operation === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = '';
                Display.value = '';
            
            

            } else if (operation === 'back') {
                currentInput = currentInput.slice(0, -1);
                Display.value = currentInput;
                return;
            }
                
            else if (operation === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = String(eval(`${previousInput}${operator}${currentInput}`));
                    Display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else { // operators + - * /
                if (currentInput !== '') 
                {
                     previousInput = currentInput;
                    operator = operation;
                    currentInput = '';
                    Display.value =previousInput + operator;
                } else {
                    previousInput = currentInput;
                    operator = operation;
                    currentInput = '';
                }
            }
        }
});
});

