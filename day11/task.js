        let buku_1 = "Dunia Shophie";
        const buku_2 = "Dunia Ghaib";
        buku_1 = "Buku Sakti Tembus Tes CPNS";
        
        // versi error
        // buku_2 = "Dunia Manji";

        let buku_buku= buku_1.concat(buku_2);
        console.log(buku_buku);
        console.log(typeof buku_buku);

        // versi tidak error
        let buku_3 = "Buku Biologi";
        let buku_4 = "Buku MTK";

        buku_3 = 12; // akan error jika tidak ada toString

        buku_buku = buku_3.toString().concat(buku_4); // toString
        console.log(buku_buku);
        console.log(typeof buku_buku);

        buku_3 = "12";

        buku_buku = buku_3.concat(buku_4);
        console.log(buku_buku);
        console.log(typeof buku_buku);

        buku_4 = null;

        buku_buku = buku_3.concat(buku_4);
        console.log(buku_buku);
        console.log(typeof buku_buku);


        // array
        buku_4 = 1.2;

        buku_buku = buku_3.concat(buku_4);
        console.log(buku_buku);
        console.log(typeof buku_buku);

        buku_3 = [1, 2, 3];
        
        // array + Int
        buku_buku = buku_3.concat(buku_4);
        console.log(buku_buku);
        console.log(typeof buku_buku);
        
        // Int + array
        buku_buku = buku_4.toString().split().map(Number).concat(buku_3); 
        console.log(buku_buku);
        console.log(typeof buku_buku);

        // array + Undefined
        buku_4 = undefined;

        buku_buku = buku_3.concat(buku_4);
        console.log(buku_buku);
        console.log(typeof buku_buku);

        // Undefined + array 
        // error
        // buku_buku = buku_4.push(buku_3);
        // console.log(buku_buku);
        // console.log(typeof buku_buku);