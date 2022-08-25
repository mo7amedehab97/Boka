import OfferList from '../Offer/OfferList'
import styles from '../../styles/Offerlist.module.css'

const HairSalon = ({ title }) => {
  return (
    <div className={styles.container}>
      <OfferList title={title} />
    </div>
  )
}

export default HairSalon
