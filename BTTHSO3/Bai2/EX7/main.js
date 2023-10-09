const buttonContainer = document.getElementById('buttonContainer');
const numbers = shuffleArray(createNumberArray(64));
let currentNumber = 1;

function createNumberArray(n) {
    const numberArray = [];
    for (let i = 1; i <= n; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createButton(number) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = number;
    button.addEventListener('click', () => {
        if (parseInt(button.textContent) === currentNumber) {
            button.classList.add('disabled');
            currentNumber++;
            if (currentNumber === 65) {
                alert('Chúc mừng! Bạn đã hoàn thành trò chơi.');
            }
        } else {
            alert('Bạn đã nhấn sai. Hãy thử lại.');
        }
    });
    return button;
}

numbers.forEach(number => {
    buttonContainer.appendChild(createButton(number));
});
