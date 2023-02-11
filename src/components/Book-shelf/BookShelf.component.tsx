import { bookState } from '../../Redux/bookSlice'
import Book from '../Book/Book.component'
import { book } from '../Book/Book.component'
import { useAppSelector, useAppDispatch } from '../../Redux/hooks'
import { useEffect, useState } from 'react'

type Cprops = { title: string; shelfTag: string }

export default function BookShelf({ title, shelfTag }: Cprops) {
    const { value } = useAppSelector(bookState)
    const [books, setBooks] = useState<book[]>([])
    useEffect(() => {
        setBooks(value.filter((book) => book.shelf === shelfTag))
    }, [value, shelfTag])

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </ol>
            </div>
        </div>
    )
}
