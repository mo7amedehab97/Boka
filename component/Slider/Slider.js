import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../../styles/Slider.module.css'
import Story from './Story'

const Slider = () => {
  const [categories, setCategories] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(
      `https://api.dev.boka.co/business-management/lookups/business-categories?limit=${8}&offset=${offset}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [offset])
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.right_arrow}>
          <Image
            src="/Right.svg"
            width={11.54}
            alt=""
            height={20}
            onClick={() => {
              if (offset <= 1) {
                setOffset(31)
              }
              setOffset((prev) => {
                return prev - 6
              })
            }}
          />
        </div>
        <div className={styles.stories_container}>
          {categories.data?.map((category) => {
            return (
              <Story
                key={category.id}
                name={category.nameEn}
                image={category?.iconUrl}
              />
            )
          })}
        </div>
        <div className={styles.left_arrow}>
          <Image
            src="/Left.svg"
            width={11.54}
            alt=""
            height={20}
            onClick={() => {
              if (offset >= 30) {
                setOffset(0)
              }
              setOffset((prev) => {
                return prev + 6
              })
            }}
          />
        </div>
      </article>
    </section>
  )
}

export default Slider
