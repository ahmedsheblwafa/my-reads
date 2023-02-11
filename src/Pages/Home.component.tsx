import BookShelf from '../components/Book-shelf/BookShelf.component'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
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
                <span onClick={() => navigate('search')}>Add a book</span>
            </div>
        </div>
    )
}
