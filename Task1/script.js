const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const advButtons = document.querySelectorAll('.advanced-section button');
const toggleAdvancedBtn = document.getElementById('toggleAdvanced');
const themeBtn = document.getElementById('themeBtn');
const calculator = document.getElementById('calculator');
const body = document.body;

let currentInput = '';
let shouldResetDisplay = false;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;

    if (!value) return;

    if (value === 'AC') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
        display.value = currentInput;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else if (value === '%') {
      currentInput = (parseFloat(display.value) / 100).toString();
      display.value = currentInput;
    } else {
      if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
      }
      currentInput += value;
      display.value += value;
    }
  });
});

advButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const func = btn.dataset.func;
    let val = parseFloat(display.value);

    try {
      switch (func) {
        case 'sin': display.value = Math.sin(toRadians(val)); break;
        case 'cos': display.value = Math.cos(toRadians(val)); break;
        case 'tan': display.value = Math.tan(toRadians(val)); break;
        case 'log': display.value = Math.log10(val); break;
        case 'ln': display.value = Math.log(val); break;
        case 'sqrt': display.value = Math.sqrt(val); break;
        case 'exp': display.value = Math.exp(val); break;
        case 'x2': display.value = Math.pow(val, 2); break;
        case '1/x': display.value = 1 / val; break;
        case 'abs': display.value = Math.abs(val); break;
        case 'n!': display.value = factorial(val); break;
        case 'π': display.value = Math.PI; break;
        case 'e': display.value = Math.E; break;
        case 'rand': display.value = Math.random(); break;
      }
      currentInput = display.value;
    } catch {
      display.value = 'Error';
    }
  });
});

toggleAdvancedBtn.addEventListener('click', () => {
  calculator.classList.toggle('show-advanced');
});

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeBtn.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function toRadians(deg) {
  return (deg * Math.PI) / 180;
}
