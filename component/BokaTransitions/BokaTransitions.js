import styles from '../../styles/BokaTransitions.module.css'
import Image from 'next/image'
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
            <div className={styles.image_before}>
              <Image src="/Before.svg" width={442} alt="" height={417} />
              <h1>Before</h1>
            </div>
            <div className={styles.boka_image_circle}>
              <span> </span>
              <span className={styles.circle}></span>
            </div>
            <div className={styles.image_after}>
              {' '}
              <Image src="/After.svg" width={442} alt="" height={417} />
              <h1>After</h1>
            </div>
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
