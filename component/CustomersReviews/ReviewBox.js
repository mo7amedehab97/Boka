import styles from '../../styles/CustomersRevews.module.css'
import Image from 'next/image'
import ReviewStars from './ReviewStars'
const ReviewBox = ({ review }) => {
  return (
    <section className={styles.review_box}>
      <div className={styles.review_profile_title}>
        <p>{review.descEn?.substring(0, 155)}</p>
      </div>
      <div className={styles.review_profile_stars}>
        {' '}
        <div className={styles.reviews_star}>
          <ReviewStars starsNumber={review.rating} />
        </div>
        <span>{review.authorNameEn}</span>
      </div>
      <div className={styles.review_profile_person}>
        {' '}
        <div>
          {' '}
          <Image src={review.authorImageUrl} width={45} height={45} alt="" />
        </div>
        <p>
          <strong> {review.authorNameEn}</strong>
          {review.authorJobEn}{' '}
        </p>
      </div>
    </section>
  )
}

export default ReviewBox
