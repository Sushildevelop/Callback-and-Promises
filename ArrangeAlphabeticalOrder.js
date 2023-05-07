const books = [{
        title: "The great gatsby",
        author: "f. scott fitzgerald",
        year: 1925,
    },
    {
        title: "To kill a mockingbird",
        author: "harper lee",
        year: 1960,
    },
    {
        title: "who are you ",
        author: "George Orwell",
        year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
]

function alpha(books, callback) {
    const order = books.map((book) => book.title);
    callback(order);
}

function callback(titles) {
    titles.sort();
    console.log(titles.join(", "));
}

alpha(books, callback)