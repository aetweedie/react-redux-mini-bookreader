import React, {Component} from 'react';

class BooksList extends Component {

  render() {
    return (
      <div>
        {this.props.books.map(book => {
          return <BookItem bookTitle={book.title}/>;
        })}
      </div>
    )
  }
  
}
