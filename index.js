const express = require('express');

const database = require('./database');

const booky = express();

booky.use(express.json());

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



booky.get("/book/is/:isbn", (req,res) => {

   const getAllBook =  database.books.filter(
        (book)=>book.ISBN === req.params.isbn
        );

    if(getAllBook.length === 0){
        return res.json({error : `No book found based on ${req.params.isbn}`});
    }


    return res.json({books : getAllBook});

});


/* 
   Route         /book/c
   Description   to get list  book based on category
   parameter     /:category
   access        public
   method        get
*/

booky.get("/book/c/:category",(req, res)=>{
 
    const getListBook = database.books.filter(
        (book)=> book.category.includes(req.params.category)
    );
    if(getListBook.length === 0){
        return res.json({book :`no book based on ${req.params.category}`});
    }
    return res.json({book: getListBook});
});


/* 
   Route         /book/l
   Description   to get book based on language
   parameter     /:language
   access        public
   method        get
*/

booky.get("/book/l/:language",(req, res)=>{
    const getBookLanguage = database.books.filter(
        (book)=> book.language === req.params.language
    );
     
    if(getBookLanguage.length === 0){
        return res.json({book :`no book based on ${req.params.language}`});
    };
      
    return res.json({book : getBookLanguage});

});

/* 
   Route         /book/price
   Description   to get book based on language
   parameter     /:p
   access        public
   method        get
*/

booky.get("/book/price/:p",(req, res)=>{
    const getBookPrice = database.books.filter(
        (book) => 
            book.price === req.params.p
        
    );
    if(getBookPrice.length === 0){
        return res.json({book : `no book based on ${req.params.p}`})
    }

    return res.json({book : getBookPrice});
});


/* 
   Route         /author
   Description   to get all author
   parameter     None
   access        public
   method        get
*/

booky.get("/author",(req,res)=>{
    return res.json({author : database.authors});
});


/* 
   Route         /author/id
   Description   to get all author based on id
   parameter     /:id
   access        public
   method        get
*/

booky.get("/author/id/:id",(req,res)=>{
    const specificAuthor = database.authors.filter(
        (author)=> author.id === parseInt(req.params.id)
    );

    if(specificAuthor.length === 0){

        return res.json({error :`no author found on this id ${req.params.id }`})
    }

    return res.json({author : specificAuthor});

});


/* 
   Route         /author/name
   Description   to get all author based on name
   parameter     /:na,e
   access        public
   method        get
*/

booky.get("/author/authname/:name",(req,res)=>{
    
    const authorName = database.authors.filter(
        (author)=> author.name === req.params.name
    ); 

    if(authorName.length === 0)
    {
        return res.json({error :`no author founded on this name ${req.params.name}`});
    };

    return res.json({author : authorName});

});



//............ Post method............


/*
  Route         /books/add
  Description   add new book
  Access        public
  Parameter     none
  Method        post
*/

//....body.......

booky.post("/book/add",(req, res)=>{
    const {newBook} = req.body;
    database.books.push(newBook);

    return res.json({book : database.books});
});
/*
  Route         /author/add
  Description   add new author
  Access        public
  Parameter     none
  Method        post
*/

//...using req.body...

booky.post("/author/newauth",(req,res)=>{
    const {newAuthor} = req.body;
    database.authors.push(newAuthor);

    return res.json( {auther : newAuthor});
});
/* 
   Route         /update/isbn
   Description   update isbn
   parameter     /:isbn
   access        public
   method        put
*/
booky.put("/author/isbn/:isbn",(req, res)=>{
    const updateBookIsbn = database.books.forEach(
        (book)=>{
            book.ISBN.filter(

            )
        }
    )
});

``
/*
   Route        /book/update/title
   Description  update book title
   Access       public
   Parameter    /:isbn
   Methods        put

*/
booky.put("/book/update/title/isbn", (req, res)=>{
    database.books.forEach(
        (book)=>{
            if(book.ISBN === req.params.isbn){
                book.title = req.params.isbn
            }
        }
    )
});



booky.listen(3000, ()=>
    console.log("hello!! server is runing 🚀")
);

