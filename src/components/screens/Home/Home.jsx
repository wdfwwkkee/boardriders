import React from 'react'
import Header from './Header/Header'
import SwiperHero from './SwiperHero/SwiperHero'
import Brands from './Brands/Brands'
import Promo from './Promo/Promo'
import News from './News/News'
import HeroPromo from './heroPromo/HeroPromo'

const Home = () => {
  return (
    <div>
      <Header />
      <SwiperHero />
      <Brands />
      <Promo />
      <News />
      <HeroPromo />
    </div>
  )
}

export default Home