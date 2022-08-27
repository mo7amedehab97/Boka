import { useState, useEffect } from 'react'

import styles from '../../styles/Offer.module.css'
import Image from 'next/image'
import OfferBox from './OfferBox'

const OfferList = ({ title }) => {
  const [business, setBusiness] = useState([])
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
      if (Number(width) > 1350) {
        setLimit(4)
        setItemsNumber(4)
      } else if (Number(width) >= 1047) {
        setLimit(3)
        setItemsNumber(3)
      } else if (Number(width) >= 705) {
        setLimit(2)
        setItemsNumber(2)
      } else {
        setLimit(1)
        setItemsNumber(1)
      }
    }
    updateWidth()
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  useEffect(() => {
    fetch(
      `https://api.dev.boka.co/business-management/businesses?limit=${limit}&offset=${offset}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setBusiness(data)
      })
  }, [offset, limit])
  return (
    <section className={styles.offer_list_container}>
      <div className={styles.inner_container}>
        <article className={styles.title}>
          <div className={styles.title_text}>
            <h1>{title}</h1>
          </div>
          <div className={styles.title_slide_icons}>
            <div className={styles.viewall_button}>
              <button>View all</button>
            </div>
            <div className={styles.arrows_container}>
              <Image
                src="/Right.svg"
                width={11.54}
                alt=""
                height={20}
                onClick={() => {
                  if (business.pageInfo?.hasPreviousPage) {
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
              <Image
                src="/Left.svg"
                width={11.54}
                alt=""
                height={20}
                onClick={() => {
                  if (business.pageInfo?.hasNextPage) {
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
        <article className={styles.offerlist_container}>
          {business.data?.map((business) => {
            return (
              <OfferBox
                key={business.id}
                imageUrl={business.businessImages[0].imageUrl}
                title={business.nameEn}
                address={business.address[0].formatted}
                services={business.services}
                reviewsNo={business.reviewsNo}
                rating={business.rating}
                bookedTodayNo={business.bookedTodayNo}
                price={business.services[0].price}
                discountPrice={business.services[0].discountPrice}
                discountValue={business.services[0].discountValue}
              />
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default OfferList
