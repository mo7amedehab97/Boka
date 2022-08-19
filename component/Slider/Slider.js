import Image from 'next/image'
import styles from '../../styles/Slider.module.css'
import Story from './Story'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'

import { Scrollbar, Mousewheel } from 'swiper'

const Slider = () => {
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.slider_arrow}>
          {' '}
          <Image src="/Right.svg" width={11.5} alt="" height={20} />
        </div>
        <div className={styles.slider_holder}>
          <Swiper
            direction={'horizontal'}
            spaceBetween={60}
            slidesPerView={8}
            mousewheel={true}
            modules={[Scrollbar, Mousewheel]}
            className={styles.swiper}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
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
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>{' '}
            <SwiperSlide>
              <Story />
            </SwiperSlide>
            <SwiperSlide>
              <Story />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.slider_arrow}>
          {' '}
          <Image src="/Left.svg" width={11.5} alt="" height={20} />
        </div>
      </article>
    </section>
  )
}

export default Slider
