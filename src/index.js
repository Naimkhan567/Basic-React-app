import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'
import { books } from './books'

import Book from './Book'
function BookList() {
  return (
    <section>
      <div className='row'>
        {books.map((book, index) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </div>
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
