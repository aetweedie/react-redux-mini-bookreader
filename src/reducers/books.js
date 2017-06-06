import _ from 'lodash';

const initialState = {
  selected: null,
  books: [
    {
      title: 'Javascript Design Patterns',
      author: 'Addy Osmani',
      isbn: 12345,
      pageNumber: null
    },
    {
      title: 'Non-Violent Communication',
      author: 'I forget',
      isbn: 67890,
      pageNumber: null
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
    case 'UPDATE_PAGE_NUMBER':
      return state.books.map((book) => {
        if (book.isbn === action.isbn) {
          return Object.assign({}, book, {
            pageNumber: action.pageNumber
          });
        }
      });
    default: 
      return state;
  }
}