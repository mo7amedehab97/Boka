import OfferList from '../Offer/OfferList'
import styles from '../../styles/Offerlist.module.css'

const FeaturedBusinesses = ({ title }) => {
  return (
    <div className={styles.container}>
      <OfferList title={title} />
    </div>
  )
}

export default FeaturedBusinesses
