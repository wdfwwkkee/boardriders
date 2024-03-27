import React, { useEffect, useState } from 'react'

import style from './news.module.scss'
import NewsCard from './NewCard/NewsCard'
import Title from '../../../ui/Title'
import ButtonReadMore from '../../../ui/Button'
import { boardService } from '../../../service/getData'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';



const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {

        const fetchNewsItems = async () => {
            const newsData = await boardService.getNewsItem();
            setNews(newsData)
        }
        fetchNewsItems()

    }, [setNews])


    return (
        <div className={style.news}>
            <div className="wrapper">
                <div className="newsContent">
                    <div className={style.title}>
                        <Title text={"Новинки"} />
                    </div>
                    <div className={style.newsList}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation={true}
                        >
                        {news.map(item => 
                            <SwiperSlide>
                                <NewsCard item={item} key={item.id}/>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                    <div className={style.btnMore}>
                        <ButtonReadMore />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default News