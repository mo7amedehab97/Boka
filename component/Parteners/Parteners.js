import Image from 'next/image'
import styles from '../../styles/Parteners.module.css'
const Parteners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.union}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.inner_container}>
        <div>
          <Image src="/Parteners1.svg" width={195} alt="" height={30} />{' '}
        </div>
        <div>
          <Image src="/Parteners2.svg" width={195} alt="" height={30} />{' '}
        </div>
        <div>
          <Image src="/Parteners3.svg" width={195} alt="" height={30} />{' '}
        </div>
        <div>
          <Image src="/Parteners4.svg" width={195} alt="" height={30} />{' '}
        </div>
        <div>
          <Image src="/Parteners5.svg" width={195} alt="" height={30} />{' '}
        </div>
      </div>
    </div>
  )
}

export default Parteners
