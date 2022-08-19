import Image from 'next/image'
import styles from '../../styles/Offer.module.css'
const OfferBox = () => {
  return (
    <section className={styles.offerbox_container}>
      <div className={styles.offerbox_image}>
        <Image src="/Box-image-1.svg" width={298} alt="" height={136} />
      </div>
      <div className={styles.offerbox_details}></div>
      <div className={styles.offerbox_price}>
        <p>Booked x today</p>
        <div>
          <span></span>
          <h2>$28.35</h2>
        </div>
      </div>
    </section>
  )
}

export default OfferBox
