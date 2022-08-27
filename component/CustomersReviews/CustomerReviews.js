import { useState, useEffect } from 'react'
import styles from '../../styles/CustomersRevews.module.css'
import ReviewBox from './ReviewBox'
import Image from 'next/image'

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([])
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(1400)
  const [limit, setLimit] = useState(4)
  const [itemsNumber, setItemsNumber] = useState(4)
  const [rightCursor, setRightCursor] = useState(false)
  const [leftCursor, setLefttCursor] = useState(true)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    const updateWidth = () => {
      if (Number(width) > 1385) {
        setItemsNumber(4)
        setLimit(4)
      } else if (Number(width) <= 1385 && Number(width) >= 1050) {
        setItemsNumber(3)
        setLimit(3)
      } else if (Number(width) <= 1049 && Number(width) >= 740) {
        setItemsNumber(2)
        setLimit(2)
      } else {
        setItemsNumber(1)
        setLimit(1)
      }
    }
    updateWidth()
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  useEffect(() => {
    fetch(
      `https://api.dev.boka.co/content-management/customers-testimonials?limit=${limit}&offset=${offset}&orderBy=orderNo&order=ASC`,
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
      })
  }, [offset, limit])

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
                  setRightCursor(true)
                  setLefttCursor(true)
                  setOffset((prev) => {
                    return prev - itemsNumber
                  })
                } else {
                  setRightCursor(false)
                }
              }}
              className={rightCursor ? styles.pointer : styles.denied}
            />
          </div>
          <div className={styles.customer_tetimonials}>
            {reviews?.data?.map((review) => {
              return <ReviewBox review={review} key={review.id} />
            })}
          </div>

          <div className={styles.right_review_arrow}>
            <Image
              src="/ReviewRight.svg"
              width={16}
              alt=""
              height={11}
              onClick={() => {
                if (reviews.pageInfo.hasNextPage) {
                  setLefttCursor(true)
                  setRightCursor(true)
                  setOffset((prev) => {
                    return prev + itemsNumber
                  })
                } else {
                  setLefttCursor(false)
                }
              }}
              className={leftCursor ? styles.pointer : styles.denied}
            />
          </div>
        </div>
      </article>
    </div>
  )
}

export default CustomerReviews
