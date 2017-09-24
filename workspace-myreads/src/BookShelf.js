import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component{
  render(){
    const { books, onShelfChange }=this.props

   return(
     <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        { books.map( book =>
          <li key={book.id}>
            <Book 
     		  selectedBook={book}
              title={book.title} 
              author={book.authors} 
              image={book.imageLinks.thumbnail}
              shelf={book.shelf}
     		  onShelfChange={onShelfChange}
              />
          </li>
        ) }
        </ol>
      </div>
    </div> 
   )}
  
 }

  BookShelf.propTypes = {
   title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

export default BookShelf