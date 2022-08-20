import Image from 'next/image'
import styles from '../../styles/Offer.module.css'
import ServicesTimeButton from './ServicesTimeButton';
import ServicesTypeButton from './ServicesTypeButton'
const OfferBox = () => {
  return (
    <section className={styles.offerbox_container}>
      <div className={styles.offerbox_image}>
        <Image src="/Box-image-1.svg" width={298} alt="" height={136} />
      </div>
      <div className={styles.offerbox_details}>
        <div className={styles.offerbox_details_title}>
          <h1>Hair X Pression Unisex Hair..</h1>
          <div className={styles.reviews_star}>
            {' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Half.svg" width={13.3} alt="" height={12.7} />{' '}
          </div>
          <span>
            (26 Reviews) <strong>4.1</strong>
          </span>
        </div>
        <div className={styles.offerbox_location}>
          <p>
            <strong>5 mile away </strong>
            400 S 2nd St Louisville, KY 40202
          </p>
          <Image src="/Location.svg" width={16} alt="" height={19.9} />
        </div>
        <div className={styles.offerbox_services}>
          <div className={styles.offerbox_services_type}>
            <div className={styles.type_button_container}>
              <ServicesTypeButton />
              <ServicesTypeButton />
              <ServicesTypeButton />
              <ServicesTypeButton />
              <ServicesTypeButton />
            </div>
            <div className={styles.type_button_arrow}>
              <Image src="/Left.svg" width={7.7} alt="" height={13.3} />{' '}
            </div>
          </div>
          <div className={styles.offerbox_services_time}>
            <ServicesTimeButton />
            <ServicesTimeButton />
            <ServicesTimeButton />
            <ServicesTimeButton />
          </div>
        </div>
      </div>
      <div className={styles.offerbox_price}>
        <p>Booked x today</p>
        <div className={styles.offerbox_price_details}>
          <span>$31.99</span>
          <h2>
            $28.35 <span>20%</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default OfferBox
