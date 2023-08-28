function purchaseBooks(book) {
    const publisher = book.publisherBook === "Domestic";
    const amountOfDiscount = (book.priceBook * book.discountBook) / 100;
    const priceAfterDiscount = book.priceBook - amountOfDiscount;
    const amountOfTax = (priceAfterDiscount * book.taxBook) / 100;
    const priceAfterTax = book.priceBook + amountOfTax;
    const priceTotal = priceAfterTax - amountOfDiscount;
    const bookCategory = priceTotal >= 100000 ? "Expensive" : "Cheap";
    let bookStock = book.stockBook;
    let totalPrice = 0;

    const detailBook = {
        title: "Book Title= " + book.titleBook,
        author: "Author= " + book.authorBook,
        domesticPublisher: "Domestic Publisher = " + publisher,
        unitPrice: "Unit price of book= " + book.priceBook,
        discount: "Discount of book per unit= " + book.discountBook + "%",
        discountAmount: "Amount of discount per unit= " + amountOfDiscount,
        priceAfterDiscount: "Unit price after discount= " + priceAfterDiscount,
        taxAmount: "Amount of tax per unit= " + amountOfTax,
        priceAfterTax: "Unit price after tax= " + priceAfterTax,
        category: "This book is " + bookCategory
    };

    for (let i = 0; i < book.purchasedBook; i++) {
        if (bookStock <= 0) {
            console.log(Object.values(detailBook).join(',\n'));
            console.log("Out of stock!");
            break;
        }

        totalPrice += priceTotal;
        bookStock--;


        if (bookStock > 0) {
            console.log(Object.values(detailBook).join(',\n'));
            console.log(`This book still available. You can buy this book again!, stok this book is: ${bookStock}`);
        } else {
            console.log(Object.values(detailBook).join(',\n'));
            console.log("For now the book is out of stock, you can't buy this book again!");
        }
    }

    

    console.log(`Total price: Rp. ${totalPrice}`);
}

const books = {
    titleBook: "Dunia Shopee",
    authorBook: "Jostein Gaarder",
    publisherBook: "Domestic",
    priceBook: 100000,
    discountBook: 15,
    taxBook: 30,
    stockBook: 0,
    purchasedBook: 5
  };
  
  purchaseBooks(books);