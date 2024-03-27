import React from 'react'
import style from './heropromo.module.scss'

const HeroPromo = () => {
    return (
        <div className={style.heroPromo}>
            <div className="wrapper">
                <div className={style.heroContent}>
                    <div className={style.heroImg}>
                        <div className={style.logo}>
                        <img src="https://s3-alpha-sig.figma.com/img/8393/3b88/0272ab1aa49687af9b56e4598052a765?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SzCVaZI6s8MuZDq8tss8GgWFNV5NVU9MGHajiVkTBCWoFhX00c-VKpmNpIk9-FKNrNkRylyThbnF-ZMOcvYYyuzO5n1fElSRc22k-p~zuEVwxjIPhY30HWxkx8FaPBLUztIqpTc53CPpHn6~Uj1N-PvueqLTZgqTpM8NhPqljWS7XI8x6uRdDpTvVXuh9xnGQhy5Ex-ITkjUnfDjRN1S2vNwp0BJZZjkuOs7ak9fBcFf6Dg4IiPi5w8ygnMAwulDQN294oJ65o4xWciWx9kajvjFOo2VOcvEaHw-IqA0gKPGrgqHsyFxSMeTpWpMuOoY750v4DKJ0dIBZOs07WLtBw__" alt="" />

                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>
                        Название Акции
                        </div>
                        <div className={style.desc}>
                        Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPromo