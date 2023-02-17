import StateMenue from '../State-menue/StateMenue.component'
import { BookAuthorsDiv, BookCoverDiv, BookDiv, BookListItem, BookTitleDiv, BookTopDiv } from './BookStyled'
export type book = { title: string; imageLinks: { thumbnail: string }; authors: string[]; id: string; shelf: string }

type Cprops = { book: book }

export default function Book({ book }: Cprops) {
    return (
        <BookListItem>
            <BookDiv>
                <BookTopDiv>
                    <BookCoverDiv img={book?.imageLinks?.thumbnail}></BookCoverDiv>
                    <StateMenue book={book} shelf={book.shelf} />
                </BookTopDiv>
                <BookTitleDiv>{book?.title}</BookTitleDiv>
                <BookAuthorsDiv>{book.authors[0] || ''}</BookAuthorsDiv>
            </BookDiv>
        </BookListItem>
    )
}
