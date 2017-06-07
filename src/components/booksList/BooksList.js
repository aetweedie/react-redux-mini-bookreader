import React, {Component} from 'react';
import BookItem from '../bookItem/BookItem';

class BooksList extends Component {

  render() {
    return (
      <div>
        {
          this.props.books.map(book => {
            return <BookItem book={book} updateSelectedBook={this.props.updateSelectedBook}/>;
          })
        }
      </div>
    )
  }

}

export default BooksList;