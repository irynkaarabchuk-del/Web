const task1Button = document.getElementById('task1');
task1Button.addEventListener('click', () => {
    
    function calculate() {
        let result = 1;
        if (true) {
            let result = 2;
            console.log("Всередині блока if: ", result); 
        }
        console.log("Поза блоком if: ", result);
    }
    calculate();
});

const task2Button = document.getElementById('task2');
task2Button.addEventListener('click', () => {
    const secretNumber = 1 % 10;
    const userInput = prompt("Enter the number from 0 to 9:");
    if (userInput >=0 && userInput <=9) {
        if (userInput == secretNumber) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    }
});

const task3Button = document.getElementById('task3');
task3Button.addEventListener('click', () => {
    const userName = prompt("Enter your name:");
    const userNum1 = prompt("Enter the first number:");
    const userNum2 = prompt("Enter the second number:");
    
    if (userName.trim() === '' || userNum1.trim() === '' || userNum2.trim() === '') {
        alert(`values not specified`);
    }
    else if (isNaN(userNum1) || isNaN(userNum2)) {
        alert(`Must be a number`);
    }
    else {
        const sum = parseInt(userNum1) + parseInt(userNum2);
        console.log(`Hello, ${userName}! The sum of ${userNum1} and ${userNum2} is: ${sum}`);
    }
    
});
