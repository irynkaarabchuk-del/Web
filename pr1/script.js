const out = document.getElementById("out");
let orders = [
    {
        orderId: 1,
        customer: {
            name: "Iryna Arabchuk",
            email: "iryna@example.com"
        },
        items: [
            { name: "Product 1", price: 10, quantity: 2 },
            { name: "Product 2", price: 20, quantity: 1 }
        ],
        total: 40
    },
    {
        orderId: 2,
        customer: {
            name: "John Doe",
            email: "john@example.com"
        },
        items: [
            { name: "Product 3", price: 15, quantity: 2 },
            { name: "Product 4", price: 25, quantity: 1 }
        ],
        total: 55
    }
];

function getTotalSpentByCustomer(orders, customerName) {
    let customerOrders = orders.filter(order => order.customer.name === customerName);
    let totalSpent = customerOrders.reduce((total, order) => total + order.total, 0);

    return totalSpent;
}
let totalSpentIryna = getTotalSpentByCustomer(orders, "Iryna Arabchuk");
let totalSpentJohn = getTotalSpentByCustomer(orders, "John Doe");
out.innerHTML += "<b>Завдання 5</b><br>";
out.innerHTML += "Total spent by Iryna Arabchuk: " + totalSpentIryna + "<br>";
out.innerHTML += "Total spent by John Doe: " + totalSpentJohn + "<br>";



let products = [
    { productId: 1, name: "Product 1", price: 10 },
    { productId: 2, name: "Product 2", price: 20 },
    { productId: 3, name: "Product 3", price: 15 }
];

let purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 1 },
    { purchaseId: 3, productId: 3, quantity: 3 }
];

function getTotalSales(products, purchases) {
    return purchases.reduce((sales, purchase) => {
    let product = products.find((p) => p.productId === purchase.productId,
    );
    if (product) {
      sales[product.name] = (sales[product.name] || 0) + product.price * purchase.quantity;
    }
    return sales;
  }, {});
}

let totalSales = getTotalSales(products, purchases);
out.innerHTML += "<b>Завдання 6</b><br>";
for (const name in totalSales) {
    out.innerHTML += name + ": " + totalSales[name] + "<br>";
}
