import _ from 'lodash';

const initialState = {
  selected: null,
  books: [
    {
      title: 'Javascript Design Patterns',
      author: 'Addy Osmani',
      isbn: 12345,
      pageNumber: 1
    },
    {
      title: 'Non-Violent Communication',
      author: 'Marshall Rosenberg',
      isbn: 67890,
      pageNumber: 1
    }
  ]
}

export default function booksListApp(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_SELECTED_BOOK':
      return Object.assign({}, state, {
        selected: action.isbn
      });
    case 'CLEAR_SELECTED_BOOK':
      return Object.assign({}, state, {
        selected: null
      });
    case 'DECREMENT_PAGE_NUMBER':
      const decrementState = _.cloneDeep(state);
      decrementState.books = decrementState.books.map((book) => {
        if (book.isbn === action.isbn) {
          book.pageNumber--;
        }
        return book;
      });
      return decrementState;
    case 'INCREMENT_PAGE_NUMBER':
      const incrementState = _.cloneDeep(state);
      incrementState.books = incrementState.books.map((book) => {
        if (book.isbn === action.isbn) {
          book.pageNumber++;
        }
        return book;
      });
      return incrementState;
    default: 
      return state;
  }
}