const MAX = 100
const MIN = 0
const ATTEMPTS_NUMBER = 10

const getPlayerName = () => {
    const playerName = prompt("Who are you?", "Enter your Name");
    // debugger
    return playerName;
}

const playerName = getPlayerName();

const getRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100)
    return randomNumber
}

const number = getRandomNumber();

console.log(playerName, number);

const game = (max, min, attNumber, randomNumber, name) => {
    alert(`Hello, ${name} !
        I made a number in the range from ${min} to ${max}. 
        You have ${attNumber} attempts to guess the hidden number`)

    for (let i = 0; i < attNumber; i++) {
        const playerAnswer = prompt("Your try")
        if (playerAnswer > randomNumber) {
            alert("My number less")
        } else if (playerAnswer < randomNumber) {
            alert("My number bigger")
        } else {
            alert("Your guess!")
            return
        }
    }

    alert(`${name}, you won for ${attNumber} !`)
}


game(MAX, MIN, ATTEMPTS_NUMBER, number, playerName);