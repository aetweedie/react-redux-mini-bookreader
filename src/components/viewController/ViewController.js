import React, {Component} from 'react';
import BooksList from '../booksList/BooksList';

class ViewController extends Component {
    
    render() {
        const selectedBook = this.props.books.filter((book) => { book.isbn === this.props.selected });

        return (
            <div>
                { (this.props.selected === null) && <BooksList books={this.props.books}/> }
                { (this.props.selected !== null) && <BookDetail book={selectedBook}/> }
            </div>
        );
    }
}

export default ViewController;
