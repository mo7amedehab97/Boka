import styles from '../../styles/Banner.module.css'
import Image from 'next/image'

const BannerStatus = () => {
  return (
    <section className={styles.banner_status}>
      <article className={styles.banner_coulmn_holder}>
        <div className={styles.banner_coulmn_1}>
          <div>
            {' '}
            <Image src="/Solid.svg" width={13.3} alt="" height={13.3} />
          </div>
          <div>
            {' '}
            <Image src="/Solid.svg" width={13.3} alt="" height={13.3} />
          </div>
        </div>
        <div className={styles.banner_coulmn_2}>
          <div>At home </div>
          <div></div>Business
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
