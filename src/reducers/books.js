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
      const updateSelectedState = _.cloneDeep(state);
      updateSelectedState.selected = action.isbn;
      return updateSelectedState;

    case 'CLEAR_SELECTED_BOOK':
      const clearSelectedState = _.cloneDeep(state);
      clearSelectedState.selected = null;
      return clearSelectedState;

    case 'DECREMENT_PAGE_NUMBER':
      const decrementState = _.cloneDeep(state);
      decrementState.books = decrementState.books.map((book) => {
        if ((book.isbn === action.isbn) && (book.pageNumber > 1)) {
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