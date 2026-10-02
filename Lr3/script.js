const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
 
  const minNumber = Number(prompt("Enter min number:"));
  const maxNumber = Number(prompt("Enter max number:"));
 const out = document.getElementById("out");
  function* randomGenerator(min, max) {
    while (true) {
      yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  const randomGen = randomGenerator(minNumber, maxNumber);
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    out.textContent = randomGen.next().value;
  });
});


const task2 = document.getElementById("task2");
const out = document.getElementById("out");
let password = ""

task2.addEventListener("click", () => {
function* passwordGenerator() {
  while (true) {
    const symbol = prompt("Enter a symbol for the password, or 'done' to finish:");
    if (symbol === "done" || symbol === null) {
      return
    }
    yield symbol
  }
}
const generator = passwordGenerator()

let result = generator.next()

while (!result.done) {
  password += result.value
  result = generator.next()
}

out.textContent = "Your password: " + password;
});

const task3 = document.getElementById("task3");
task3.addEventListener("click", () => {
  function* chatBot() {
    const name = yield "Hi! What is your name?";
    yield `Nice to meet you, ${name}! How are you?`;
    yield "Goodbye!";
  }

  const bot = chatBot();
  let botResult = bot.next();

  while (!botResult.done) {
    if (botResult.value === "Goodbye!") {
      alert(botResult.value);
    } else {
      const userInput = prompt(botResult.value);
      botResult = bot.next(userInput);
      continue;
    }
    botResult = bot.next();
  }
});

const task4Button = document.getElementById("task4");
task4Button.addEventListener("click", () => {
  const userName = prompt("Enter your name:");
  const helloButton = document.getElementById("hello");
helloButton.addEventListener("click", () => {
  const user = {
    name: userName,
    say() {
      alert(`Hello, ${this.name}`);
    }
  };

  user.say();
});
});
