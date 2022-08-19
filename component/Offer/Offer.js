import styles from '../../styles/Offer.module.css'
import AdsBox from './AdsBox'
import Image from 'next/image'
import OfferList from './OfferList'
const Offer = () => {
  return (
    <section className={styles.container}>
      <AdsBox />
   
      <OfferList />
    </section>
  )
}

export default Offer
