import styled from 'styled-components'

export const SearchBooksDiv = styled.div``

export const SearchBooksBar = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
    input {
        width: 100%;
        padding: 15px 10px;
        font-size: 1.25em;
        border: none;
        outline: none;
    }
`

export const SearchBooksInputWrapper = styled.div`
    flex: 1;
    background: #e9e;
`

export const CloseSearch = styled.span`
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background: white;
    background-image: url('./my-icons/arrow-back.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
`

export const SearchBooksResults = styled.div`
    padding: 80px 10px 20px;
`
