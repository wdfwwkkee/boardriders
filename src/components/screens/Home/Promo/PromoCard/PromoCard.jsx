import React from 'react'
import style from './promoCard.module.scss'

const PromoCard = ({ item }) => {
  return (
    <div className={style.Card}>
      <div className={style.img} style={{backgroundImage : `url(${item.image})`}}>
      </div>
      <div className={style.title}>
        {item.title}
      </div>
    </div>
  )
}

export default PromoCard