import { useState, useEffect } from 'react'

import styles from '../../styles/Offer.module.css'
import Image from 'next/image'
import OfferBox from './OfferBox'

const OfferList = () => {
  const [business, setBusiness] = useState([])
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    fetch(
      `https://api.dev.boka.co/business-management/businesses?limit=${4}&offset=${offset}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setBusiness(data)
      })
  }, [offset])
  return (
    <section className={styles.offer_list_container}>
      <div className={styles.inner_container}>
        <article className={styles.title}>
          <div className={styles.title_text}>
            <h1>Spical offer</h1>
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
                  if (business.pageInfo.hasPreviousPage) {
                    setOffset((prev) => {
                      return prev - 4
                    })
                  }
                }}
              />
              <Image
                src="/Left.svg"
                width={11.54}
                alt=""
                height={20}
                onClick={() => {
                  if (business.pageInfo.hasNextPage) {
                    setOffset((prev) => {
                      return prev + 4
                    })
                  }
                }}
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
