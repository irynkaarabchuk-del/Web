const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
 
  const minNumber = Number(prompt("Enter the minimum number:"));
  const maxNumber = Number(prompt("Enter the maximum number:"));
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
task2.addEventListener("click", () => {
while (!result.done) {
  password += result.value
  result = generator.next()
}

out.textContent = "Your password: " + password;
});


