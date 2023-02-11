import { useEffect, useState } from 'react'
import './App.css'
import { book } from './components/Book/Book.component'
import BookShelf from './components/Book-shelf/BookShelf.component'
import { useAppSelector, useAppDispatch } from './Redux/hooks'
import { getAllBooks } from './Redux/bookSlice'

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    const [showSearchPage, setShowSearchpage] = useState(false)
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading" shelfTag="currentlyReading" />
                    <BookShelf title="Want to Read" shelfTag="wantToRead" />
                    <BookShelf title="Read" shelfTag="read" />
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
            </div>
        </div>
    )
}

export default App
