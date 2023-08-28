        // Task 1
        let firstBook = "Dunia Shopee";
        let secondBook = "Dunia Siapa";

        console.log(firstBook == secondBook); // false

        secondBook = "dunia shopee";
        console.log(firstBook == secondBook); // false

        firstBook = 10;
        secondBook = 10;
        console.log(firstBook == secondBook); // true

        firstBook = "12"
        console.log(firstBook == secondBook); // false

        firstBook = [1,2,3,4]
        secondBook = 1234
        console.log(firstBook == secondBook); // false

        firstBook = 1234
        secondBook = 1234
        console.log(firstBook == secondBook); // true


        firstBook = true
        secondBook = true
        console.log(firstBook == secondBook); // true

        firstBook = false
        secondBook = false
        console.log(firstBook == secondBook); // true

        firstBook = true
        secondBook = false
        console.log(firstBook == secondBook); // true


        // Task 2
        let bookOne = {
                "nameBook" : "Biologi",
                "priceBook" : 150000
        }

        let bookTwo = {
                "nameBook" : "Matematika",
                "priceBook" : 750000
        }

        if (bookOne.nameBook == bookTwo.nameBook){
                console.log("it is a same book");
        } else {
                console.log("it is a difference book");
        }

        console.log(bookOne.nameBook > bookTwo.nameBook? bookOne.nameBook:bookTwo.nameBook)

        let averagePrice = (bookOne.priceBook + bookTwo.priceBook) / 2
        console.log(averagePrice)

        let priceCategory = averagePrice >=500000 ?  "Expensive" : "Cheap";
        console.log(priceCategory);

        
        // logic Test
        function max_of_two(a, b) {
                if (a > b) {
                  return a;
                } else {
                  return b;
                }
        }
        console.log(max_of_two(10, 5));  // Output will be 10
        console.log(max_of_two(90, 90)); // Output will be 66