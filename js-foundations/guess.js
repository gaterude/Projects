const target = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

while (true) {

    const input = prompt(`Guess a number between 1 and 100`);

    const guess = Number(input);
    attempts++;

    if (Number.isNaN(guess) || guess < 1 || guess > 100) {
        alert(`Enter a valid number`);
        continue;
    }

    if (guess === target) {
        alert(`Congratulations! Won in ${attempts} attempts.`);
        break;

    } else if (guess < target) {
        alert(`Ooops! Try guessing higher`);

    } else {
        alert(`Cooked! Maybe lower`);
    }
}