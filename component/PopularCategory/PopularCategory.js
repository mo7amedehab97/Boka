import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/PopularCategory.module.css'

const PopularCategory = ({ PopularCategories }) => {
  const [popularCategories, setPopularCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [width, setWidth] = useState(1400)
  const [imagewidth, setImageWidth] = useState(629)
  const [imageHeight, setImageHeight] = useState(390)

  const newData = popularCategories.data?.slice(
    1,
    popularCategories.data.length,
  )

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    const updateWidth = () => {
      if (Number(width) > 700) {
        setImageWidth(629)
        setImageHeight(390)
      }
     else if (Number(width) < 700) {
        setImageWidth(529)
        setImageHeight(340)
      } else if (Number(width) <= 600) {
        setImageWidth(429)
        setImageHeight(290)
      }  else if (Number(width) <= 580) {
        setImageWidth(370)
        setImageHeight(260)
      }else {
        setImageWidth(300)
        setImageHeight(210)
      }
    }
    updateWidth()
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])
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
                width={imagewidth}
                alt=""
                height={imageHeight}
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
