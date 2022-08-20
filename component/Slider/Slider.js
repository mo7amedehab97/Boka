import Image from 'next/image'
import styles from '../../styles/Slider.module.css'
import Story from './Story'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Navigation, Mousewheel, Scrollbar } from 'swiper'

const Slider = () => {
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.slider_holder}>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            slidesPerGroup={6}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            mousewheel={true}
            direction={'horizontal'}
            modules={[Navigation, Mousewheel, Scrollbar]}
          >
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </section>
  )
}

export default Slider
