import React from 'react'
import style from './navbar.module.scss'
const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className="wrapper">
        <div className="navBarContent">
          <div className={style.navBarList}>
            <div className="navBarItem"><a href="/">Новинки</a></div>
            <div className="navBarItem"><a href="/">Сноуборд</a></div>
            <div className="navBarItem"><a href="/">Лыжи</a></div>
            <div className="navBarItem"><a href="/">Скейт</a></div>
            <div className="navBarItem"><a href="/">Лонгборд</a></div>
            <div className="navBarItem"><a href="/">Вейкборд</a></div>
            <div className="navBarItem"><a href="/">Серф</a></div>
            <div className="navBarItem"><a href="/">Sup</a></div>
            <div className="navBarItem"><a href="/">Одежда</a></div>
            <div className="navBarItem"><a href="/">Обувь</a></div>
            <div className="navBarItem"><a href="/">Аксессуары</a></div>
            <div className="navBarItem"><a href="/">Бренды</a></div>
            <div className="navBarItem"><a href="/">Распродажа</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar