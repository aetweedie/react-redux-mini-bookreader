import React, {Component} from 'react';

class BookDetails extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickBack}>Back</button>
        <h1>{this.props.book.title}</h1>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.isbn}</p>
        <p>{this.props.book.pageNumber}</p>
        <div>
          <button onClick={() => this.props.decrementPageNumber(this.props.book.isbn)}>Previous Page</button>
          <button onClick={() => this.props.incrementPageNumber(this.props.book.isbn)}>Next Page</button>
        </div>
      </div>
    )
  }
}

export default BookDetails;