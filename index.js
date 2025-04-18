const express = require('express');

const app = express();

// Dummy books data
const books = [
    { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', pageCount: 220, country: 'United States' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281, country: 'United States' },
    { id: 3, title: '1984', author: 'George Orwell', pageCount: 328, country: 'United Kingdom' },
    { id: 4, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', pageCount: 417, country: 'Colombia' },
    { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pageCount: 180, country: 'United States' },
    { id: 6, title: 'Astoņi Kustoņi', author: 'I. Ziedonis', pageCount: 180, country: 'Latvia' },
    { id: 7, title: 'Chip War', author: 'Random Author of the Book - Test', pageCount: 300, country: 'USA' },
];

// Endpoint to get list of dummy books
app.get('/books', (req, res) => {
    res.json(books);
});

// Endpoint to get a book by ID
app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find((book) => book.id === Number(id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Export app so tests can use it
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
    const defaultPort = 1010;
    const port = process.argv[2] || defaultPort;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
