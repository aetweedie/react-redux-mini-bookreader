import React, {Component} from 'react';

class BookItem extends Component {
  
  render() {
    return (
      <div onClick={() => this.props.updateSelectedBook(this.props.book.isbn)}>
        <h1>{this.props.book.title}</h1>
        <p>{this.props.book.author}</p>
      </div>
    )
  }
}

export default BookItem;