let books=[
    {
        ISBN            : "1book",
        title           : "pretended",
        pagNo           : "250",
        publicationId   : "1",
        price           : "2$",
        pubDate         : "2021-3-21",
        language        : "english",
        authorId        : [1],
        category        : ["entertainments","funny"]

    },

    {
        ISBN          : "12book",
        title         : "condone",
        pageNo        : "145",
        publicationId : "2",
        price         : "3$",
        pubDate       : "2021-4-22",
        language      : "english",
        authorId      : [1,2],
        category      : ["entertainments","drama"]    
    },

    {
        
        ISBN          : "123book",
        title         : "sneakiness",
        pageNo        : "230",
        publicationId : "3",
        price         : "6$",
        pubDate       : "2021-3-2",
        language      : "english",
        authorId      : [1,2,3],
        category      : ["entertainments","drama","action"]
    }

];

let authors = [
    {
        id       : "1",
        name     : "John",
        books    : ["1book","12book"]   
    },
    {
        id       : "2",
        name     : "door",
        books    : ["123book"]   
    },
    {
        id       : "3",
        name     : "wind",
        books    : ["12book"]   
    }
];


let publications = [
    {
        publicationId   : "1",
        name            : "look",
        books           : ["1book"],
        authors         : [1]
    },
    {
        publicationId   : "2",
        name            : "dook",
        books           : ["1book","12book"],
        authors         : [1,2]
    },
    {
        publicationId   : "3",
        name            : "cook",
        books           : ["123book"],
        authors         : [3]
    }
];

module.exports = {books, authors ,publications};