import React, {Component} from 'react';

class ViewController extends Component {
    
    
    render() {
        var selectedBook = this.props.books.filter((book) => { book.isbn === this.props.selected });

        return (
            <div>
                { (this.props.selected === null) && <BooksList/> }
                { (this.props.selected !== null) && <BookDetail book={selectedBook}/> }
            </div>
        );
    }
}

export default ViewController;
