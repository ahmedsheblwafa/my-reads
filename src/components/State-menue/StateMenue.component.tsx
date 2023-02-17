import { updateBook } from '../../Redux/bookSlice'
import { useAppDispatch } from '../../Redux/hooks'
import { book } from '../Book/Book.component'
import { BookShelfChanger, BookShelfChangerSelect } from './StyledStateMenue'

type Cprops = {
    shelf: string
    book: book
}

export default function StateMenue({ shelf, book }: Cprops) {
    const dispatch = useAppDispatch()
    return (
        <BookShelfChanger>
            <BookShelfChangerSelect
                value={shelf}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch(updateBook({ book, shelf: e.currentTarget.value }))
                }}
            >
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">{shelf === 'currentlyReading' ? '✓' : ''} Currently Reading</option>
                <option value="wantToRead">{shelf === 'wantToRead' ? '✓' : ''} Want to Read</option>
                <option value="read">{shelf === 'read' ? '✓' : ''} Read</option>
                {shelf !== 'none' ? <option value="none">None</option> : ''}
            </BookShelfChangerSelect>
        </BookShelfChanger>
    )
}
