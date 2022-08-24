import Image from 'next/image'
import styles from '../../styles/Offer.module.css'
import ServicesTimeButton from './ServicesTimeButton'
import ServicesTypeButton from './ServicesTypeButton'
const OfferBox = ({
  imageUrl,
  title,
  address,
  services,
  reviewsNo,
  rating,
  bookedTodayNo,
  price,
  discountPrice,
  discountValue,
}) => {
  return (
    <section className={styles.offerbox_container}>
      <div className={styles.offerbox_image}>
        <Image src={imageUrl} width={298} alt="" height={136} />
      </div>
      <div className={styles.offerbox_details}>
        <div className={styles.offerbox_details_title}>
          <h1>{title}</h1>
          <div className={styles.reviews_star}>
            {' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
            <Image src="/Half.svg" width={13.3} alt="" height={12.7} />{' '}
          </div>
          <span>
            ({reviewsNo} Reviews) <strong>{rating}</strong>
          </span>
        </div>
        <div className={styles.offerbox_location}>
          <p>
            <strong>5 mile away </strong>
            {address}
          </p>
          <Image src="/Location.svg" width={16} alt="" height={19.9} />
        </div>
        <div className={styles.offerbox_services}>
          <div className={styles.offerbox_services_type}>
            <div className={styles.type_button_container}>
              {services.map((service) => {
                return (
                  <ServicesTypeButton key={service.id} name={service.nameEn} />
                )
              })}
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
        <p> Booked {bookedTodayNo} today</p>
        <div className={styles.offerbox_price_details}>
          <span>${discountPrice || 0}</span>
          <h2>
            ${price} <span>{discountValue || 0}%</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default OfferBox
