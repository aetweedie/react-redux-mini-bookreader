
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

export function updatePageNumber(isbn,pageNumber) {
  return {
    type: 'UPDATE_PAGE_NUMBER',
    isbn,
    pageNumber
  }
}
