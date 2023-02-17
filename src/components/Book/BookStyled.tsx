import styled from 'styled-components'

export const BookListItem = styled.li`
    padding: 10px 15px;
    text-align: left;
`
export const BookDiv = styled.div`
    width: 140px;
`
export const BookTopDiv = styled.div`
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
`
export const BookCoverDiv = styled.div`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: #eee;
    width: 128px;
    height: 193px;
    background: url(${(props: { img: string }) => props.img});
`

export const BookTitleDiv = styled.div`
    font-size: 0.8em;
    margin-top: 10px;
`

export const BookAuthorsDiv = styled.div`
    font-size: 0.8em;
    color: #999;
`
