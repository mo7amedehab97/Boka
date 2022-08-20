import Image from 'next/image'
import styles from '../../styles/PopularCategory.module.css'

const PopularCategory = () => {
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <section className={styles.category_title}>
          <h1>Popular Category</h1>
          <button>View all Category</button>
        </section>
        <section className={styles.category_image}>
          <div className={styles.single_image}>

            <div className={styles.single_details}>
              <p>
                Manicure
                <span>243+ Business</span>
              </p>
              <div>
                <Image src="/ArrowLeft.svg" width={16} alt="" height={11} />{' '}
              </div>
            </div>
          </div>
          <div className={styles.grid_image}>
            <div>
              {' '}
                  <h2>hello here</h2>
              <Image src="/Grid1.svg" width={299} alt="" height={180} />{' '}
            </div>
            <div>
              {' '}                  <h2>hello here</h2>

              <Image src="/Grid2.svg" width={299} alt="" height={180} />{' '}
              
            </div>
            <div>
                  <h2>hello here</h2>

              {' '}
              <Image src="/Grid3.svg" width={299} alt="" height={180} />{' '}
            </div>
            <div>
              {' '}
                  <h2>hello here</h2>

              <Image src="/Grid4.svg" width={299} alt="" height={180} />{' '}
            </div>
          </div>
        </section>
      </article>
    </section>
  )
}

export default PopularCategory
