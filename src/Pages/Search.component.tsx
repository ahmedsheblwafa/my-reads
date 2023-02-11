import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Book from '../components/Book/Book.component'
import { booksState, searchBook } from '../Redux/bookSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'

export default function Search() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(searchBook(''))
    }, [dispatch])
    const { searchBooks } = useAppSelector(booksState)
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        onChange={(e) => {
                            dispatch(searchBook(e.currentTarget.value))
                        }}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </ol>
            </div>
        </div>
    )
}
