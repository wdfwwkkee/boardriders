import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />




            <Route element={<div>Page is not found!</div>} path='*' />
        </Routes>
    </BrowserRouter>
  )
}

export default Router