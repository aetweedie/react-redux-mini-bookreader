import React, {Component} from 'react';
import BookItem from '../bookItem/BookItem';
import './booksList.css';

class BooksList extends Component {

  render() {
    return (
      <div className='books-list-container'>
        {
          this.props.books.map(book => {
            return <BookItem key={book.isbn} book={book} updateSelectedBook={this.props.updateSelectedBook}/>;
          })
        }
      </div>
    )
  }

}

export default BooksList;