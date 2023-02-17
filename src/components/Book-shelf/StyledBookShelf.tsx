import styled from 'styled-components'

export const BookshelfDiv = styled.div`
    padding: 0 10px 20px;
    &@media (min-width: 600px) {
        padding: 0 20px 40px;
    }
`
export const BookShelfTitle = styled.h2`
    border-bottom: 1px solid #dedede;
`

export const BookShelfBooks = styled.div`
    text-align: center;
`
export const BooksGrid = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
