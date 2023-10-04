function checkWinner() {
    const colorsInput = document.getElementById('colorsInput').value.trim(); // Trim leading and trailing spaces

    // Check if input is empty
    if (colorsInput === '') {
        const resultElement = document.getElementById('result');
        resultElement.innerText = 'Please enter a color sequence.';
        return;
    }

    const isAWinner = winnerOfGame(colorsInput);
    
    const resultElement = document.getElementById('result');
    if (isAWinner === true) {
        resultElement.innerText = 'Winner: A (AAA sequence)';
    } else if (isAWinner === false) {
        resultElement.innerText = 'Winner: B (BBB sequence)';
    } else if (isAWinner === null) {
            resultElement.innerText = 'Sequence Tied! Try again';
    } else {
        resultElement.innerHTML = 'Sequence <span style="color: red;">NOT</span> detected! Try again with AAA or BBB';
    }
}

const winnerOfGame = function(colors) {
    let countA = 0; 
    let countB = 0; 

    for (let i = 0; i < colors.length - 2; i++) {
        
        if ((colors[i] === 'A' || colors[i] === 'a') &&
            (colors[i + 1] === 'A' || colors[i + 1] === 'a') &&
            (colors[i + 2] === 'A' || colors[i + 2] === 'a')) {
            countA++; 
        }

        if ((colors[i] === 'B' || colors[i] === 'b') &&
            (colors[i + 1] === 'B' || colors[i + 1] === 'b') &&
            (colors[i + 2] === 'B' || colors[i + 2] === 'b')) {
            countB++; 
        }
    }
    console.log('AAA sequences count:', countA);
    console.log('BBB sequences count:', countB);

    if (countA > countB) {
        return true; 
    } else if (countA < countB) {
        return false; 
    } else {
        console.log('Sequence tied!');
        return null;
    }
};

// Example usage
console.log('Example 1 - AAA sequence');
console.log(winnerOfGame('AAABBBAAA'));

console.log('Example 2 - BBB sequence');
console.log(winnerOfGame('BBBAABBBABB'));