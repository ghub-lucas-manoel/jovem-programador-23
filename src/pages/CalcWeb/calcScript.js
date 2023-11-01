$(document).ready(function() {
    $('#modalCalculadora').modal('show');
});

function abrirModalTutorial() {
    document.getElementById("modalCalculadora").style.display = 'block';
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        if (Number.isNaN(result) || !Number.isFinite(result)) {
            throw new Error('Erro');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

const buttons = document.querySelectorAll('.calculator button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculateResult();
        } else if (button.textContent === 'AC') {
            clearDisplay();
        } else if (button.textContent === 'C') {
            deleteLastCharacter();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '1234567890.+-*/%=C←';

    if (validKeys.includes(key)) {
        if (key === '=') {
            calculateResult();
        } else if (key === 'C') {
            clearDisplay();
        } else if (key === '<') {
            deleteLastCharacter();
        } else {
            appendToDisplay(key);
        }
    }
});
