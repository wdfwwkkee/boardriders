import React from 'react'
import style from './swiperHero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const SwiperHero = () => {
    return (
        <div className={style.swiper}>
            <Swiper className={style.swiperWrapper}
                modules={[Autoplay, Navigation]}
                centeredSlides={true}
                slidesPerView={1.4}
                spaceBetween={20}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide className={style.swiperSlide}>
                    <img src="/hero/snowboard1.png" alt="" />
                    <div className={style.swiperTxt}>
                        WINTER SALE ДО -70%
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>
                    <img src="/hero/snowboard2.png" alt="" />
                    <div className={style.swiperTxt}>
                        WINTER SALE ДО -70%
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>
                    <img src="/hero/snowboard3.png" alt="" />
                    <div className={style.swiperTxt}>
                        WINTER SALE ДО -70%
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperHero