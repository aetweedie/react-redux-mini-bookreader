import React, {Component} from 'react';
import './bookItem.css';

class BookItem extends Component {
  
  render() {
    return (
      <div className='book-item' onClick={() => this.props.updateSelectedBook(this.props.book.isbn)}>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
      </div>
    )
  }
}

export default BookItem;