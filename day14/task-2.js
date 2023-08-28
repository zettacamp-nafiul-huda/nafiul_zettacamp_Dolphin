function purchaseBooks(book) {
    const publisher = book.publisherBook === "Domestic";
    const amountOfDiscount = (book.priceBook * book.discountBook) / 100;
    const priceAfterDiscount = book.priceBook - amountOfDiscount;
    const amountOfTax = (priceAfterDiscount * book.taxBook) / 100;
    const priceAfterTax = book.priceBook + amountOfTax;
    const priceTotal = priceAfterTax - amountOfDiscount;
    const bookCategory = priceTotal >= 100000 ? "Expensive" : "Cheap";
    let bookStock = book.stockBook;
  
    for (let i = 1; i <= book.purchasedBook; i++) {
      if (bookStock === 0) {
        console.log("Out of stock. Cannot purchase more books.");
        break;
      } else if (bookStock < book.purchasedBook) {
        console.log(`Only ${bookStock} books available, please reduce your order!`);
        break;
      } else {
        console.log("Book Title= " + book.titleBook);
        console.log("Author= " + book.authorBook);
        console.log("Domestic Publisher = " + publisher)
        console.log("Price of book= " + book.priceBook);
        console.log("Discount of book= " + book.discountBook + "%");
        console.log("Amount of discount= " + amountOfDiscount);
        console.log("Price after discount= " + priceAfterDiscount);
        console.log("Amount of tax= " + amountOfTax);
        console.log("Price after tax= " + priceAfterTax);
        console.log("Price total= Rp." + priceTotal);
        console.log("This book is " + bookCategory);
        console.log("Remaining stock= " + bookStock);
        console.log("Total Price you must pay " + book.purchasedBook * priceTotal);
        break;
      }
    }
  }
  
  const books = {
    titleBook: "Dunia Shopee",
    authorBook: "Jostein Gaarder",
    publisherBook: "Domestic",
    priceBook: 1000000,
    discountBook: 15,
    taxBook: 30,
    stockBook: 10,
    purchasedBook: 5
  };
  
  purchaseBooks(books);