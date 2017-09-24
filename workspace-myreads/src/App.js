import React from 'react'
import { Route } from 'react-router-dom'
import BookLibrary from './BookLibrary'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

  }

	componentDidMount(){
     BooksAPI.getAll().then( (books) =>{

      const currentlyReading = books.filter(book =>  book.shelf === 'currentlyReading')
      const wantToRead = books.filter(book =>  book.shelf === 'wantToRead')
      const read = books.filter(book =>  book.shelf === 'read')
      
      this.setState({ books: { currentlyReading, wantToRead, read } })


    })
    }

	shelfChange = (book, shelf) => {
      book.shelf = shelf
      this.setState({books: this.state.books.filter((b) => b.id !== book.id).concat([book]) })
  	  BooksAPI.update(book,shelf)
    }

  render() {

    return (
      <div className="app">
       		<Route path='/search' exact render={ () => (
              <Search />
           )} />
           <Route path='/' exact render={ () => (
              <BookLibrary 
                  allBooks={this.state.books}
				  onShelfChange={this.shelfChange}
			  />
           )} />
            
      </div>
    )}
}

export default BooksApp
