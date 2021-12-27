const express = require('express');

const database = require('./database');

const booky = express();


/* 
   Route         /
   Description   to get all book
   parameter     none
   access        public
   method        get
*/

booky.get('/', (req,res) => {
    return res.json({books : database.books});
});



/* 
   Route         /is
   Description   to get specific book
   parameter     /:isbn
   access        public
   method        get
*/



booky.get("/is/:isbn", (req,res) => {

   const getAllBook =  database.books.filter(
        (book)=>book.ISBN === req.params.isbn
        );

    if(getAllBook.length === 0){
        return res.json({error : `No book found based on ${req.params.isbn}`});
    }


    return res.json({books : getAllBook});

});


/* 
   Route         /is/c
   Description   to get list  book based on category
   parameter     /:category
   access        public
   method        get
*/

booky.get("/is/c/:category",(req, res)=>{
 
    const getListBook = database.books.filter(
        (book)=> book.category.includes(req.params.category)
    );
    if(getListBook.length === 0){
        return res.json({book :`no book based on ${req.params.category}`});
    }
    return res.json({book: getListBook});
});


/* 
   Route         /is/c/l
   Description   to get book based on language
   parameter     /:language
   access        public
   method        get
*/

booky.get("/is/c/l/:language",(req, res)=>{
    const getBookLanguage = database.books.filter(
        (book)=> book.language === req.params.language
    );
     
    if(getBookLanguage.length === 0){
        return res.json({book :`no book based on ${req.params.language}`});
    };
      
    return res.json({book : getBookLanguage});

});

booky.listen(3000, ()=>
    console.log("hello  server is runing 🚀")
);

