import styles from '../../styles/Offer.module.css'
import Image from 'next/image'
import OfferBox from './OfferBox'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Navigation, Mousewheel, Scrollbar } from 'swiper'
const OfferList = () => {
  return (
    <section>
      <article className={styles.title}>
        <div className={styles.title_text}>
          <h1>Spical offer</h1>
        </div>
        <div className={styles.title_slide_icons}>
          <div>View all</div>
        </div>
      </article>
      <article className={styles.offerlist_container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          mousewheel={true}
          direction={'horizontal'}
          modules={[Navigation, Mousewheel, Scrollbar]}
        >
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
          <SwiperSlide>
            <OfferBox />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  )
}

export default OfferList
