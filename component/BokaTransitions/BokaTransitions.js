import styles from '../../styles/BokaTransitions.module.css'
import Image from 'next/image'
import ImageSlider from 'react-image-comparison-slider'

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
            <ImageSlider
              image1="/After.png"
              image2="/Before.png"
              sliderColor="#fff"
              handleColor="#fff"
              leftLabelText="Before"
              rightLabelText="After"
              onSlide={() => {
                console.log('sliding')
              }}
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
