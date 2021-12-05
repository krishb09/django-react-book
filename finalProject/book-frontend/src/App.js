import './App.css';
import AllBooks from './components/allBooks';
import React, { useState, useEffect } from 'react';

const App = function (props) {

  const [booksList, setBooksList] = useState([]);

  //GET request to show all books
  const displayBooks = () => {

    fetch('/api/books/')
    .then(res => res.json())
    .then(result => setBooksList(result))

  }

  useEffect(() => {
      displayBooks();
  }, [])


  return (
    <div >
      <header className="App-header">
        <h1>Book Tracker App</h1>
      </header>
      <AllBooks books={booksList} className="all-books"/>
    </div>
  );
}

export default App;
