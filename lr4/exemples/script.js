function markAsRead() {
  this.isRead = true;
}

let book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,
  bookInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
  }
}

book.bookInfo()

book.isRead = !book.isRead;
book.bookInfo();



let library = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true, markAsRead },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false, markAsRead },
  { title: "1984", author: "George Orwell", year: 1949, isRead: true, markAsRead }
];

function displayLibrary() {
  library.forEach(book => {
    console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
  });
}

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false, markAsRead });
displayLibrary();

library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання:", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги:", unreadBooks);

let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", tolkienBook);


function addBookToLibrary() {
  let title = prompt("Введіть назву книги:");
  let author = prompt("Введіть автора книги:");
  let year = +prompt("Введіть рік видання книги:");
  let isRead = confirm("Чи прочитана книга?");

  library.push({ title, author, year, isRead, markAsRead });
  displayLibrary();
}

addBookToLibrary();

library[1].markAsRead(); //завдання 1
displayLibrary();


function calculateAverageYear() { //завдання 2
    let sum = 0;
    library.forEach(book => {
        sum += book.year;
    });
    return sum / library.length;
}
console.log("Середній рік видання книг:", calculateAverageYear());