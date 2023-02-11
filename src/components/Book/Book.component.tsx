import StateMenue from '../State-menue/StateMenue.component'
export type book = { title: string; imageLinks: { thumbnail: string }; author: string; id: string; shelf: string }

type Cprops = { book: book }

export default function Book({ book }: Cprops) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }}
                    ></div>
                    <StateMenue book={book} shelf={book.shelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        </li>
    )
}
