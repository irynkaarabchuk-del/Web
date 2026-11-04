const loader = document.getElementById('loader');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

loader.style.display = 'block';

function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (num1 > num2) {
            resolve(`Значення (${num1}) більше другого числа (${num2})`);
        } else if (num1 < num2) {
            resolve(`Значення (${num1}) менше другого числа (${num2})`);
        } else {
            resolve(`Значення (${num1}) дорівнює (${num2})`);
        }
        }, 1000);
    });
}

    compareNumbers(12, 1)
    .then((result) => {
        result1.textContent = result;
    })
    .catch((error) => {
        result1.textContent = "Помилка: " + error;
    })
    .finally(() => {
        loader.style.display = 'none';
    });

//2
function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
}
let promises = [
    new Promise((resolve) => setTimeout(() => resolve(randomNum()), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(randomNum()), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(randomNum()), 3000))
];


Promise.all(promises)
    .then((values) => {
        result2.textContent = "Всі знвчення: " + values.join(", ");
        result2.textContent += " Сума: " + values.reduce((sum, value) => sum + value, 0);
    })
    .catch((error) => {
        result2.textContent = "Помилка: " + error;
    });