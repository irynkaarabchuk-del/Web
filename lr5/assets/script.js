//task1
const Fahrenheit = document.getElementById("Fahrenheit");
const Celsius = document.getElementById("Celsius");

Fahrenheit.addEventListener("input", () => {
  const fahrenheitValue = parseFloat(Fahrenheit.value);
  Celsius.value = ((5 / 9) * (fahrenheitValue - 32)).toFixed(2);
});

Celsius.addEventListener("input", () => {
  const celsiusValue = parseFloat(Celsius.value);
  Fahrenheit.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
});
const MAX = 10;

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

// ===== ЗАВДАННЯ 2 =====
const nextTaskButton = document.getElementById("nextTaskButton");
const answerInput = document.getElementById("answerInput");
const checkAnswerButton = document.getElementById("checkAnswerButton");
const questionText = document.getElementById("questionText");
const questionText2 = document.getElementById("questionText2");
const resultPercentage = document.getElementById("resultPercentage");
const resultNumber = document.getElementById("resultNumber");
const totalQuestions = document.getElementById("totalQuestions");
const message = document.getElementById("message");

let correct = 0;
let total = 0;
let num1 = 0;
let num2 = 0;

totalQuestions.textContent = MAX;

function generateNumbers() {
  num1 = randomNumber();
  num2 = randomNumber();
  questionText.textContent = num1;
  questionText2.textContent = num2;
  answerInput.value = "";
  message.textContent = "";
  checkAnswerButton.disabled = false;
}

nextTaskButton.addEventListener("click", () => {
  if (total >= MAX) return;
  generateNumbers();
});

checkAnswerButton.addEventListener("click", () => {
  if (answerInput.value.trim() === "") {
    message.textContent = "Введи відповідь";
    return;
  }
  if (parseInt(answerInput.value) === num1 * num2) {
    message.textContent = "Правильно!";
    correct++;
  } else {
    message.textContent = `Помилка, правильна відповідь «${num1 * num2}»`;
  }
  total++;
  resultNumber.textContent = correct;
  resultPercentage.textContent = Math.round((correct / MAX) * 100);
  checkAnswerButton.disabled = true;
  if (total === MAX) nextTaskButton.disabled = true;
});

generateNumbers();

// ===== ЗАВДАННЯ 3 =====
const nextTaskButton2 = document.getElementById("nextTaskButton2");
const questionText3 = document.getElementById("questionText3");
const questionText4 = document.getElementById("questionText4");
const resultPercentage2 = document.getElementById("resultPercentage2");
const resultNumber2 = document.getElementById("resultNumber2");
const totalQuestions2 = document.getElementById("totalQuestions2");
const message2 = document.getElementById("message2");
const radios = document.querySelectorAll('input[name="answerOption"]');

let correct2 = 0;
let total2 = 0;
let right = 0;
let answered = false;

totalQuestions2.textContent = MAX;

function generateTask3() {
  const n1 = randomNumber();
  const n2 = randomNumber();
  right = n1 * n2;
  questionText3.textContent = n1;
  questionText4.textContent = n2;
  message2.textContent = "";
  answered = false;

  // 4 різні варіанти, один правильний
  const variants = [right];
  while (variants.length < 4) {
    const wrong = randomNumber() * randomNumber();
    if (!variants.includes(wrong)) variants.push(wrong);
  }
  variants.sort(() => Math.random() - 0.5);

  radios.forEach((radio, i) => {
    radio.value = variants[i];
    radio.checked = false;
    radio.disabled = false;
    radio.nextElementSibling.textContent = variants[i];
  });
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (answered) return;
    answered = true;
    total2++;

    if (Number(radio.value) === right) {
      correct2++;
      message2.textContent = "Правильно!";
    } else {
      message2.textContent = `Помилка, правильна відповідь «${right}»`;
    }

    resultNumber2.textContent = correct2;
    resultPercentage2.textContent = Math.round((correct2 / MAX) * 100);

    radios.forEach((r) => (r.disabled = true));

    if (total2 === MAX) nextTaskButton2.disabled = true;
  });
});

nextTaskButton2.addEventListener("click", () => {
  if (total2 >= MAX) return;
  if (!answered) {
    message2.textContent = "Спочатку вибери відповідь";
    return;
  }
  generateTask3();
});

generateTask3();

//task4
let dogArray = [
  {
    path: "images/chiko1.jpg",
    title: "Собаки",
    description: "Веселий чіко",
  },
  {
    path: "images/chiko2.jpg",
    title: "Собаки",
    description: "Модєлька чіко",
  },
  {
    path: "images/chiko3.jpg",
    title: "Собаки",
    description: "Сонний чіко",
  },
  {
    path: "images/chiko4.jpg",
    title: "Собаки",
    description: "Грайливий чіко",
  },
  {
    path: "images/chiko5.jpg",
    title: "Собаки",
    description: "Злий на тапки чіко",
  },
  {
    path: "images/chiko6.jpg",
    title: "Собаки",
    description: "Охоронець чіко",
  },
  {
    path: "images/chiko7.jpg",
    title: "Собаки",
    description: "Чіко після укусу оси",
  },
  {
    path: "images/chiko8.jpg",
    title: "Собаки",
    description: "Чіко акробат",
  },
];
function initPhotoRotator(containerId, dogArray) {
    const container = document.getElementById(containerId);
    let current = 0; 
    const rotatorHeader = document.createElement("div");
rotatorHeader.className = "rotator-header";

const row = document.createElement("div");
row.className = "rotator-row";

const beforeButton = document.createElement("button");
beforeButton.textContent = "назад";

const img = document.createElement("img");

const nextButton = document.createElement("button");
nextButton.textContent = "вперед";

const rotatorTitle = document.createElement("div");
rotatorTitle.className = "rotator-title";

const description = document.createElement("p");

row.appendChild(beforeButton);
row.appendChild(img);
row.appendChild(nextButton);

container.appendChild(rotatorHeader);
container.appendChild(row);
container.appendChild(rotatorTitle);
container.appendChild(description);

    function show() {
        img.src = dogArray[current].path;
        rotatorHeader.textContent = `Фотографія ${current + 1} з ${dogArray.length}`;
        rotatorTitle.textContent = dogArray[current].title;
        description.textContent = dogArray[current].description;
    }

    nextButton.addEventListener("click", () => {
        current++;
        if (current >= dogArray.length) current = 0;
        show();
    });

    beforeButton.addEventListener("click", () => {
        current--;
        if (current < 0) current = dogArray.length - 1;
        show();
    });

    show();
}
initPhotoRotator("rotator", dogArray);

//task5

//task5
//task5
const digitFont = {
  0: ["111", "101", "101", "101", "111"],
  1: ["010", "110", "010", "010", "111"],
  2: ["111", "001", "111", "100", "111"],
  3: ["111", "001", "111", "001", "111"],
  4: ["101", "101", "111", "001", "001"],
  5: ["111", "100", "111", "001", "111"],
  6: ["111", "100", "111", "101", "111"],
  7: ["111", "001", "001", "001", "001"],
  8: ["111", "101", "111", "101", "111"],
  9: ["111", "101", "111", "001", "111"],
};
function initCaptcha(containerId, digitsCount) {
  const container = document.getElementById(containerId);
  const input = document.getElementById("input");
  const statusMsg = document.getElementById("statusMsg");
  let code = "";

  for (let i = 0; i < digitsCount; i++) {
    code += Math.floor(Math.random() * 10);
  }

  for (const ch of code) {
    const digit = document.createElement("div");
    digit.className = "captcha-digit";
    for (const row of digitFont[ch]) {
      for (const cell of row) {
        const pixel = document.createElement("span");
        if (cell === "1") pixel.className = "on";
        digit.appendChild(pixel);
      }
    }
    container.appendChild(digit);
  }

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (input.value === code) {
      statusMsg.textContent = "Правильно";
      statusMsg.style.color = "green";
    } else {
      statusMsg.textContent = "Помилка";
      statusMsg.style.color = "red";
    }
  });
}

initCaptcha("captcha", 2);