import styled from 'styled-components'

export const ListBooksDiv = styled.div``
export const ListBooksTitle = styled.div`
    padding: 10px 0;
    background: #2e7c31;
    text-align: center;
    h1 {
        font-weight: 400;
        margin: 0;
        color: white;
    }
`

export const ListBooksContent = styled.div`
    padding: 0 0 80px;
    flex: 1;
`

export const OpenSearchDiv = styled.div`
    position: fixed;
    right: 25px;
    bottom: 25px;
    span {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2e7d32;
        background-image: url('./my-icons/add.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 28px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        font-size: 0;
    }
`
