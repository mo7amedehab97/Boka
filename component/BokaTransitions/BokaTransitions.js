import styles from '../../styles/BokaTransitions.module.css'
import Image from 'next/image'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const FIRST_IMAGE = {
  imageUrl: '/Before.png',
}
const SECOND_IMAGE = {
  imageUrl: '/After.png',
}
const BokaTransitions = () => {
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.boka_title}>
          <h1> Boka Transformation</h1>
          <button>Book Now</button>
        </div>
        <div className={styles.boka_details}>
          <div className={styles.boka_details_images}>
            <ReactBeforeSliderComponent
              firstImage={FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
            />
          </div>
          <div className={styles.boka_details_profile}>
            <p>
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam...”
            </p>
            <p>
              <strong>Shoukri Kattan</strong>
              Hair Specialist @boka
            </p>
            <p>Book Shoukri for $49</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default BokaTransitions
