import styles from '../../styles/Offer.module.css'
import AdsBox from './AdsBox'
import OfferList from './OfferList'
const Offer = ({ title }) => {
  return (
    <section className={styles.container}>
      <AdsBox />

      <OfferList title={title} />
    </section>
  )
}

export default Offer
