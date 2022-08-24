import ReactStars from 'react-rating-stars-component'
import Full from './Full'
import Half from './Half'
const ReviewStars = ({ starsNumber }) => {
  return (
    <ReactStars
      count={starsNumber}
      value={starsNumber}
      char={<Full />}
      halfIcon={<Half />}
      filledIcon={<Full />}
    />
  )
}

export default ReviewStars
