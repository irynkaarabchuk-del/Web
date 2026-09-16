const task1Button = document.getElementById('task1');
task1Button.addEventListener('click', () => {
    alert('Task1 button clicked!');
    const output = document.getElementById("output");
    const name = "Iryna Arabchuk";
    output.textContent = `Hello, ${name}!`;
});


const task8Button = document.getElementById('task8');
task8Button.addEventListener('click', () => {
    const name = "Iryna";
    const list = document.getElementById("nameList");
    list.replaceChildren(); 

    name.split("").forEach(letter => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = letter;
        span.addEventListener("mouseenter", () => {
            alert(`Буква: ${letter}`);
        });
        li.appendChild(span);
        list.appendChild(li);
    });
});

const task9Button = document.getElementById('task9');
task9Button.addEventListener('click', () => {
    const output = document.getElementById("output");

    while (true) {
        const surname = prompt("Введіть прізвище:");
        if (surname === null) break;
        const firstname = prompt("Введіть ім'я:");
        if (firstname === null) break;

        const p = document.createElement("p");
        p.textContent = `${surname} ${firstname}`;
        output.appendChild(p);
    }
});

const task10Button = document.getElementById('task10');
const lettersContainer = document.getElementById('letters');
const surname = "Арабчук";

task10Button.addEventListener('click', () => {
    if (lettersContainer.children.length === 0) {
        surname.split("").forEach(letter => {
            const div = document.createElement("div");
            div.textContent = letter;
            div.addEventListener("mouseenter", () => {
                alert(`Це літера ${letter}`);
            });
            lettersContainer.appendChild(div);
        });
    } else {
        lettersContainer.replaceChildren(); 
    }
});