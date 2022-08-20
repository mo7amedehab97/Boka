import styles from '../../styles/CustomersRevews.module.css'
import Image from 'next/image'
const ReviewBox = () => {
  return (
    <section className={styles.review_box}>
      <div className={styles.review_profile_title}>
        <p>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...”
        </p>
      </div>
      <div className={styles.review_profile_stars}>
        {' '}
        <div className={styles.reviews_star}>
          {' '}
          <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
          <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
          <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
          <Image src="/Full.svg" width={13.3} alt="" height={12.7} />{' '}
          <Image src="/Half.svg" width={13.3} alt="" height={12.7} />{' '}
        </div>
        <span>Mohamed Ehab</span>
      </div>
      <div className={styles.review_profile_person}>
        {' '}
        <p>
          <strong> Anup Kanti Deb</strong>
          Sylhet, Bangladesh{' '}
        </p>
      </div>
    </section>
  )
}

export default ReviewBox
