import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import { useState, useEffect } from 'react'

import styles from '../../styles/BokaTransitions.module.css'
import Image from 'next/image'

const BokaTransitions = ({ CaseStudies }) => {
  const [caseStudies, setCaseStudies] = useState([])
  const [provider, setProvider] = useState([])

  useEffect(() => {
    fetch('https://api.dev.boka.co/business-management/providers/1')
      .then((res) => res.json())
      .then((data) => {
        setProvider(data)
      })
    setCaseStudies(CaseStudies)
  }, [CaseStudies])
  console.log(caseStudies.data?.[0])
  const FIRST_IMAGE = {
    imageUrl: caseStudies.data?.[0].imageAfterUrl,
  }
  const SECOND_IMAGE = {
    imageUrl: caseStudies.data?.[0].imageBeforeUrl,
  }
  return (
    <section className={styles.container}>
      <article className={styles.inner_container}>
        <div className={styles.boka_title}>
          <h1> {caseStudies.data?.[0].nameEn}</h1>
          <button>Book Now</button>
        </div>
        <div className={styles.boka_details}>
          <div className={styles.boka_details_images}>
            <ReactBeforeSliderComponent
              firstImage={FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
            />
          </div>
          <div className={styles.boka_details_profile}>
            <p>{caseStudies.data?.[0].descEn}</p>
            <div className={styles.boka_story_image}>
              <div>
                <Image src={provider.imageUrl} width={45} height={45} alt="" />
              </div>

              <p>
                <strong>{provider.firstName}</strong>
                {provider.jobTitle}{' '}
              </p>
            </div>
            <p>
              Book {provider.firstName} for ${caseStudies.data?.[0].price}
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default BokaTransitions
