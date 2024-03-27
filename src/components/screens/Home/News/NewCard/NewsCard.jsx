import React from 'react'
import style from './newCard.module.scss'
import Checkbox from '@mui/material/Checkbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarChecked from '@mui/icons-material/StarOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const NewsCard = ({ item }) => {
    return (
        <div className={style.card}>
            <a href="/">
                <div className={style.imgBlock}>
                    <div className={style.favorite}>
                        <Checkbox
                            {...label}
                            icon={<StarOutlineIcon
                                color='action'
                                fontSize="large"
                            />}
                            checkedIcon={<StarChecked
                                color='action'
                                fontSize="large"
                            />}
                        />
                    </div>
                    <img src={item.image} alt="img" />
                    {item.promo ?
                        <div className={style.promoPers}>
                            -{item.promoPercent}%
                        </div>
                        : <span></span>
                    }
                </div>
                <div className={style.info}>
                    <div className={style.title}>
                        {item.title}
                    </div>
                    <div className={style.desc}>
                        {item.desc}
                    </div>
                    <div className={style.price}>
                        {item.promo ?
                            <div className={style.pricePromo}>
                                <span style={{
                                    textDecoration: "line-through"
                                }}>{item.price} ₽</span>
                                <span className={style.newPrice}>
                                    {item.price / 100 * item.promoPercent} ₽
                                </span>
                            </div>


                            : <span>{item.price} ₽</span>
                        }
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NewsCard