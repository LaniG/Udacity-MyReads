import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookLibrary extends Component{
  
  render(){
	const { allBooks, onShelfChange }=this.props
   return( 
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
     				title="Currently Reading"
     				books={ allBooks.currentlyReading }
     				onShelfChnage={ onShelfChange }
     			/>
     
     			<BookShelf
     				title="Want To Read"
     				books={ allBooks.wantToRead }
     				onShelfChnage={ onShelfChange }
     			/>
     
     			<BookShelf
     				title="Read"
     				books={ allBooks.read }
     				onShelfChnage={ onShelfChange }
     			/>
  
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
          </div>
   )}
  
}

export default BookLibrary