import React, {Component} from 'react';
import {connect} from 'react-redux';
import BooksList from '../booksList/BooksList';
import BookDetails from '../bookDetails/BookDetails';
import {updateSelectedBook,clearSelectedBook} from '../../actions/books';

class ViewController extends Component {
    
    render() {
        const selectedBook = this.props.books.filter((book) => book.isbn === this.props.selected )[0];

        return (
            <div>
                { (this.props.selected === null) && <BooksList books={this.props.books} onClickBookItem={this.props.onClickBookItem}/> }
                { (this.props.selected !== null) && <BookDetails book={selectedBook} onClickBack={this.props.onClickBack}/> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        selected: state.selected
    }    
}

const mapDispatchToProps = {
    onClickBookItem: updateSelectedBook,
    onClickBack: clearSelectedBook
}

const ViewControllerContainer = connect(mapStateToProps,mapDispatchToProps)(ViewController);

export default ViewControllerContainer;
