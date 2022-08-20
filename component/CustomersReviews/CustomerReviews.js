import styles from '../../styles/CustomersRevews.module.css'
import ReviewBox from './ReviewBox'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Navigation, Mousewheel, Scrollbar } from 'swiper'

const CustomerReviews = () => {
  return (
    <div className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.review_title}>
          <h1>Our happy customers say about us</h1>
        </div>
        <div className={styles.reviews_slider}>
          <div className={styles.boxing}>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              slidesPerGroup={4}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              mousewheel={true}
              direction={'horizontal'}
              modules={[Navigation, Mousewheel, Scrollbar]}
            >
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewBox />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
      <div></div>
    </div>
  )
}

export default CustomerReviews
