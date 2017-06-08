import React, {Component} from 'react';
import './BookDetails.css';

class BookDetails extends Component {
  render() {
    return (
      <div className='book-details'>
        <button className='button' onClick={this.props.clearSelectedBook}>Back</button>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
        <p>{`ISBN: ${this.props.book.isbn}`}</p>
        <p>{`Page ${this.props.book.pageNumber}`}</p>
        <div>
          <button className='button button-nav' onClick={() => this.props.decrementPageNumber(this.props.book.isbn)}>Previous Page</button>
          <button className='button button-nav' onClick={() => this.props.incrementPageNumber(this.props.book.isbn)}>Next Page</button>
        </div>
      </div>
    )
  }
}

export default BookDetails;