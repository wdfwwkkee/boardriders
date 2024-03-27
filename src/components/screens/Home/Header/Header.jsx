import React from 'react'
import style from './header.module.scss'
import Delivery from './Delivery/Delivery'
import MainBar from './Main/MainBar'
import NavBar from './NavBar/NavBar'

const Header = () => {
    return (
        
        <div className={style.header}>
            <Delivery />
            <MainBar />
            <NavBar />
        </div>
    )
}

export default Header