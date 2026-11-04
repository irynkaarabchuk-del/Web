let myPromise = new Promise((resolve, reject) => {
    let x= 5;
    if (x>3) {
        resolve("Значення більше 3!");
    } else {
        reject("Значення менше або дорівнює 3!");
    }
});

myPromise
    .then((result) => {
        console.log("Успішно: " + result);
    })
    .catch((error) => {
        console.error("Помилка: " + error);
    });


    //2
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Затримка ${ms} мс завершена`), ms);
    });
}

delay(1000)
.then((message) => {
    console.log(message);
    return delay(500);
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error("Помилка: " + error);
});

//3
let promis1 = new Promise((resolve) => setTimeout(() => resolve(10), 1000));
let promis2 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));
let promis3 = new Promise((resolve) => setTimeout(() => resolve(30), 3000));

Promise.all([promis1, promis2, promis3])
    .then((values) => {
        console.log("Всі знвчення:", values);
    })
    .catch((error) => {
        console.error("Помилка: " + error);
    });
