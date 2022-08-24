import { useState, useEffect } from 'react'
import styles from '../../styles/CustomersRevews.module.css'
import ReviewBox from './ReviewBox'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Navigation, Mousewheel, Scrollbar } from 'swiper'

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([])
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    fetch(
      `https://api.dev.boka.co/content-management/customers-testimonials?limit=${4}&offset=${offset}&orderBy=orderNo&order=ASC`,
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
      })
  }, [offset])

  return (
    <div className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.review_title}>
          <h1>Our happy customers say about us</h1>
        </div>
        <div className={styles.reviews_container}>
          <div className={styles.left_review_arrow}>
            <Image
              src="/ReviewLeft.svg"
              width={16}
              alt=""
              height={11}
              onClick={() => {
                if (reviews.pageInfo.hasPreviousPage) {
                  setOffset((prev) => {
                    return prev - 4
                  })
                }
              }}
            />
          </div>

          {reviews?.data?.map((review) => {
            return <ReviewBox review={review} key={review.id} />
          })}
          <div className={styles.right_review_arrow}>
            <Image
              src="/ReviewRight.svg"
              width={16}
              alt=""
              height={11}
              onClick={() => {
                if (reviews.pageInfo.hasNextPage) {
                  setOffset((prev) => {
                    return prev + 4
                  })
                }
              }}
            />
          </div>
        </div>
      </article>
    </div>
  )
}

export default CustomerReviews
