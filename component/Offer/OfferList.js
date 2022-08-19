import styles from '../../styles/Offer.module.css'
import Image from 'next/image'
import OfferBox from './OfferBox';
const OfferList = () => {
  return (
    <section>
      <article className={styles.title}>
        <div className={styles.title_text}>
          <h1>Spical offer</h1>
        </div>
        <div className={styles.title_slide_icons}>
          <div>View all</div>

          <div className={styles.arrow_container}>
            <Image src="/Right.svg" width={11.5} alt="" height={20} />
            <Image src="/Left.svg" width={11.5} alt="" height={20} />
          </div>
        </div>
      </article>
          <article className={styles.offerlist_container}>
              <OfferBox />
              <OfferBox />
              <OfferBox />
              <OfferBox />
              <OfferBox />

      </article>
    </section>
  )
}

export default OfferList
