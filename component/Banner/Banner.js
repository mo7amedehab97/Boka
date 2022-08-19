import styles from '../../styles/Banner.module.css'
import Image from 'next/image'
import BannerStatus from './BannerStatus'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.banner_title}>
          <p>your style looking spical </p>
          <h1>Clothes mean nothing until someone lives in them </h1>
        </div>
        <div className={styles.banner_search}>
          <div >
            <BannerStatus />
          </div>
          <div className={styles.search_input}>
            <div className={styles.search_box_icon}>
              <Image src="/Search.svg" width={16.7} alt="" height={16.7} />
            </div>
            <div>
              {' '}
              <input type="text" name="" id="" />
            </div>
            <div className={styles.cancel_box_icon}>
              <Image src="/Cancel.svg" width={10.6} alt="" height={10.6} />
            </div>{' '}
          </div>
          <div className={styles.search_button}>
            <button>Search</button>
          </div>
        </div>
        <div className={styles.banner_footer}>
          <p>It looks like you are in Dhaka Division. Not correct?</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
