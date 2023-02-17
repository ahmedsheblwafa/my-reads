import BookShelf from '../../components/Book-shelf/BookShelf.component'
import { useNavigate } from 'react-router-dom'
import { ListBooksContent, ListBooksDiv, ListBooksTitle, OpenSearchDiv } from './HomeStyled'

export default function Home() {
    const shelfs = [
        { title: 'Currently Reading', shelfTag: 'currentlyReading' },
        { title: 'Want to Read', shelfTag: 'wantToRead' },
        { title: 'Read', shelfTag: 'read' }
    ]
    const navigate = useNavigate()
    return (
        <ListBooksDiv>
            <ListBooksTitle>
                <h1>MyReads</h1>
            </ListBooksTitle>

            <ListBooksContent>
                {shelfs.map((shelf, i) => (
                    <BookShelf key={i} title={shelf.title} shelfTag={shelf.shelfTag} />
                ))}
            </ListBooksContent>

            <OpenSearchDiv>
                <span onClick={() => navigate('search')}>Add a book</span>
            </OpenSearchDiv>
        </ListBooksDiv>
    )
}
