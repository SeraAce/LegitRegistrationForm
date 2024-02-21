function buttonsub() {
    const message = document.createElement("p");
    message.style.color = "red";
    message.textContent = "User with this age already exist";
    const targetElement = document.getElementById("error-container");
    if (!targetElement.querySelector('p')) {
        targetElement.appendChild(message);
      }
  }

  const inputField = document.getElementById('inputField');
const keyboard = document.querySelector('.keyboard');

// Keys
const keys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'k', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','Backspace'
];

// Create keyboard keys
keys.forEach(key => {
    const keyButton = document.createElement('button');
    keyButton.textContent = key;
    keyButton.classList.add('key');
    keyButton.addEventListener('click', () => handleKeyClick(key));
    keyboard.appendChild(keyButton);
});

function handleKeyClick(key) {
    if (key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
    } else {
        inputField.value += key;
    }
}
