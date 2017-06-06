import React, {Component} from 'react';

class BookDetails extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickBack}>Back</button>
        <h1>{this.props.book.title}</h1>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.isbn}</p>
      </div>
    )
  }
}

export default BookDetails;