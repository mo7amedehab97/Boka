import styles from '../../styles/Banner.module.css'
import Image from 'next/image'

const BannerStatus = () => {
  return (
    <section className={styles.banner_status}>
      <article className={styles.banner_coulmn_holder}>
        <div>
          <input type="checkbox" name="busniess" id="busniess" />
          <label htmlFor="busniess">For Busniess</label>
        </div>{' '}
        <div>
          <input type="checkbox" name="home" id="home" />
          <label htmlFor="home">At Home</label>
        </div>
      </article>
      <article className={styles.status_details}>
        <div>
          {' '}
          <Image src="/Business.svg" width={16.7} alt="" height={16.7} />
        </div>
        <div>Today</div>
      </article>
      <article className={styles.status_details}>
        <div>
          {' '}
          <Image src="/Time.svg" width={16.7} alt="" height={16.7} />
        </div>
        <div>Now</div>
      </article>
      <article className={styles.status_details}>
        <div>
          {' '}
          <Image src="/Location.svg" width={16.7} alt="" height={16.7} />
        </div>
        <div>Los Angeles</div>
      </article>
    </section>
  )
}

export default BannerStatus
