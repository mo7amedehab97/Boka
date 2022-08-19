import styles from '../../styles/Offer.module.css'

import Image from 'next/image'
const AdsBox = () => {
  return (
    <section className={styles.ads_box}>
      <div className={styles.mother_icon}>
        {' '}
        <Image src="/Mother.svg" width={198.2} alt="" height={299.9} />
      </div>
      <div className={styles.ads_title}>
        <h1>Treat your mom for Mother{"'"}s Day</h1>
        <p>20% off on selected treatments</p>
      </div>
      <div className={styles.love_icons}>
        <div>
          <Image src="/Love2.svg" width={103} alt="" height={129} />
        </div>
        <div>
          <Image src="/Love1.svg" width={126} alt="" height={160} />
        </div>
      </div>
    </section>
  )
}

export default AdsBox
