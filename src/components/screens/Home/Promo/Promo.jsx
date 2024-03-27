import React, { useEffect, useState } from 'react'
import style from './promo.module.scss'
import PromoCard from './PromoCard/PromoCard'
import { boardService } from '../../../service/getData'
const Promo = () => {
    const [promos, setPromos] = useState([])

    useEffect(() => {

        const fetchPromoData = async () => {
            const promoData = await boardService.getPromo()
            setPromos(promoData)
        }
        fetchPromoData()

    }, [setPromos])

    return (
        <div className={style.Promo}>
            <div className="wrapper">
                <div className="promoContent">
                    <div className={style.promoList}>
                        {promos.map(promo => <PromoCard key={promo.id} item={promo} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo