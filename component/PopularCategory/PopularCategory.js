import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/PopularCategory.module.css'

const PopularCategory = ({ PopularCategories }) => {
  const [popularCategories, setPopularCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const newData = popularCategories.data?.slice(
    1,
    popularCategories.data.length,
  )
  useEffect(() => {
    setPopularCategories(PopularCategories)
    setLoading(true)
  }, [loading, PopularCategories])
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <section className={styles.category_title}>
          <h1>Popular Category</h1>
          <button>View all Category</button>
        </section>
        <section className={styles.category_image}>
          <div className={styles.single_image}>
            <div className={styles.single_image_container}>
              <span className={styles.layer}></span>
              <Image
                src={loading && popularCategories.data[0].thumbnailUrl}
                width={629}
                alt=""
                height={390}
              />{' '}
              <div className={styles.single_details}>
                <p>
                  {loading && popularCategories?.data[0].nameEn}
                  <span>
                    +{loading && popularCategories?.data[0].usedNo} Busnisses
                  </span>
                </p>
                <div className={styles.arrow_left_container}>
                  <Image src="/ArrowLeft.svg" width={16} alt="" height={11} />{' '}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid_image}>
            {newData?.map((list) => {
              return (
                <div key={list.id}>
                  {' '}
                  <span className={styles.grid_layer}></span>
                  <h2>{list.nameEn}</h2>
                  <Image
                    src={list.thumbnailUrl}
                    width={299}
                    alt=""
                    height={180}
                  />{' '}
                </div>
              )
            })}
          </div>
        </section>
      </article>
    </section>
  )
}

export default PopularCategory
