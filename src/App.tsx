import { useEffect, useState } from 'react'
import './App.css'
import { book } from './components/Book/Book.component'
import BookShelf from './components/Book-shelf/BookShelf.component'
import { useAppSelector, useAppDispatch } from './Redux/hooks'
import { getAllBooks } from './Redux/bookSlice'
import Home from './Pages/Home.component'
import { Route, Routes } from 'react-router'
import Search from './Pages/Search.component'

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
        </Routes>
    )
}

export default App
