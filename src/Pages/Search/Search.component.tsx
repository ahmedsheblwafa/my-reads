import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BooksGrid } from '../../components/Book-shelf/StyledBookShelf'
import Book from '../../components/Book/Book.component'
import { booksState, searchBook } from '../../Redux/bookSlice'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import {
    CloseSearch,
    SearchBooksBar,
    SearchBooksDiv,
    SearchBooksInputWrapper,
    SearchBooksResults
} from './SearchStyled'

export default function Search() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(searchBook(''))
    }, [dispatch])
    const { searchBooks } = useAppSelector(booksState)
    return (
        <SearchBooksDiv>
            <SearchBooksBar>
                <CloseSearch
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    close
                </CloseSearch>

                <SearchBooksInputWrapper>
                    <input
                        onChange={(e) => {
                            dispatch(searchBook(e.currentTarget.value))
                        }}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </SearchBooksInputWrapper>
            </SearchBooksBar>

            <SearchBooksResults>
                <BooksGrid>
                    {searchBooks.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </BooksGrid>
            </SearchBooksResults>
        </SearchBooksDiv>
    )
}
