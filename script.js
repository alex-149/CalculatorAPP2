let display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
  display.value += char;
}

function toggleSign() {
  if (display.value[0] === '-') {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
