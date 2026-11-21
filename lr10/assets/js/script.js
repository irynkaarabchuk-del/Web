var cart = [];

var currentName = "";
var currentPrice = 0;
var currentImg = "";

var cartIcon = document.getElementById("cartHeaderIcon");
var cartBadge = document.getElementById("cartBadge");
var modalEmpty = document.getElementById("modal_empty");
var modalQty = document.getElementById("modal_qty");
var modalAdded = document.getElementById("modal_added");
var qtyInput = document.querySelector(".modal_input");
var tbody = document.querySelector("#cart_page tbody");
var totalBlock = document.querySelector(".cart_total");

// показати / закрити вікна
function showModal(modal) {
    closeModals();
    modal.classList.add("open");
}
function closeModals() {
    modalEmpty.classList.remove("open");
    modalQty.classList.remove("open");
    modalAdded.classList.remove("open");
}

// кнопки у корзину в картках
var buttons = document.querySelectorAll(".button.yes");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        e.preventDefault();
        var card = this.closest(".components");

        currentName = card.querySelector(".name").textContent;
        currentImg = card.querySelector("img").getAttribute("src");

        var numbers = card.querySelector(".price").textContent.match(/\d+/g);
        currentPrice = Number(numbers[numbers.length - 1]);

        qtyInput.value = 1;
        showModal(modalQty);
    };
}

// кнопка додати до корзини
document.querySelector("#modal_qty .main").onclick = function (e) {
    e.preventDefault();
    var qty = Number(qtyInput.value);
    if (qty < 1) {
        alert("Вкажіть кількість від 1");
        return;
    }

    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == currentName) {
            cart[i].qty = cart[i].qty + qty;
            found = true;
        }
    }
    if (found == false) {
        cart.push({ name: currentName, price: currentPrice, img: currentImg, qty: qty });
    }

    cartBadge.textContent = cart.length; 
    showModal(modalAdded);
};

// кнопки "скасувати", "закрити", "повернутись до покупок" у вікнах
var closeButtons = document.querySelectorAll(".modal_btn");
for (var j = 0; j < closeButtons.length; j++) {
    if (!closeButtons[j].classList.contains("main")) {
        closeButtons[j].onclick = function (e) {
            e.preventDefault();
            closeModals();
        };
    }
}

//перейти у корзину
document.querySelector("#modal_added .main").onclick = function (e) {
    e.preventDefault();
    closeModals();
    openCart();
};

// іконка корзини
cartIcon.onclick = function (e) {
    e.preventDefault();
    if (cart.length == 0) {
        showModal(modalEmpty);
    } else {
        openCart();
    }
};

// показати сторінку корзини
function openCart() {
    var html = "";
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        var sum = cart[i].price * cart[i].qty;
        total = total + sum;
        html = html + "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td><img src='" + cart[i].img + "' alt='photo'></td>" +
            "<td class='cart_name'>" + cart[i].name + "</td>" +
            "<td>" + cart[i].price + " грн</td>" +
            "<td>" + cart[i].qty + "</td>" +
            "<td>" + sum + " грн</td>" +
            "</tr>";
    }
    tbody.innerHTML = html;
    totalBlock.textContent = "Разом: " + total + " грн";
    location.hash = "#cart_page";
}

// повернутись до покупок
document.querySelector("#cart_page .back").onclick = function (e) {
    e.preventDefault();
    location.hash = "";
};

// оплатити
document.querySelector("#cart_page .yes").onclick = function (e) {
    e.preventDefault();
    alert("Дякуємо за замовлення!");
    cart = [];
    cartBadge.textContent = 0;
    location.hash = "";
};