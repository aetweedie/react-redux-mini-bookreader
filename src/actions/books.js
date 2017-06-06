
export function updateSelectedBook(isbn) {
  return {
    type: 'UPDATE_SELECTED_BOOK',
    isbn
  }
}

export function clearSelectedBook() {
  return {
    type: 'CLEAR_SELECTED_BOOK'
  }
}

export function decrementPageNumber(isbn) {
  return {
    type: 'DECREMENT_PAGE_NUMBER',
    isbn
  }
}

export function incrementPageNumber(isbn) {
  return {
    type: 'INCREMENT_PAGE_NUMBER',
    isbn
  }
}
