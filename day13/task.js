function PurchasingBook(bookTitle, author, price, discount=0, tax=10){
    const amountOfDiscount = price * discount /100 ;
    const priceAfterDiscount = price - amountOfDiscount ;
    const amountOfTax = price * tax / 100 ;
    const priceAfterTax = price + amountOfTax;
    const priceTotal = priceAfterTax - amountOfDiscount;
    const bookCategory = priceTotal >= 100000 ? "Expensive" : "Cheap";

    console.log("Book Title= " + bookTitle);
    console.log("Author= " + author);
    console.log("price of book= " + price);
    console.log("discount of book= " + discount);
    console.log("Amount of discount= " + amountOfDiscount);
    console.log("Price after discount= " + priceAfterDiscount);
    console.log("Amount of tax= " + amountOfTax);
    console.log("Price after tax= " + priceAfterTax);
    console.log("Price total= " + priceTotal);
    console.log("This book is " + bookCategory);
}

PurchasingBook("Dunia Shopee", "nafiulhuda", 100000, 10, 15);