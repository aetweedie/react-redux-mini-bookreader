import React, {Component} from 'react';

class BookItem extends Component {
  
  render() {
    return (
      <div onClick={() => this.props.onClickBookItem(this.props.book.isbn)}>
        <h1>{this.props.book.title}</h1>
        <p>{this.props.book.author}</p>
      </div>
    )
  }
}