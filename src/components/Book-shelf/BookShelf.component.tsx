import { booksState } from '../../Redux/bookSlice'
import Book from '../Book/Book.component'
import { book } from '../Book/Book.component'
import { useAppSelector } from '../../Redux/hooks'
import { useEffect, useState } from 'react'
import { BooksGrid, BookShelfBooks, BookshelfDiv, BookShelfTitle } from './StyledBookShelf'

type Cprops = { title: string; shelfTag: string }

export default function BookShelf({ title, shelfTag }: Cprops) {
    const { value } = useAppSelector(booksState)
    const [books, setBooks] = useState<book[]>([])
    useEffect(() => {
        setBooks(value.filter((book) => book.shelf === shelfTag))
    }, [value, shelfTag])

    return (
        <BookshelfDiv>
            <BookShelfTitle>{title}</BookShelfTitle>
            <BookShelfBooks>
                <BooksGrid>
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </BooksGrid>
            </BookShelfBooks>
        </BookshelfDiv>
    )
}
