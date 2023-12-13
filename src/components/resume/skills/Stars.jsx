import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating';

const tooltipArr = [
  "ضعیف",
  "متوسط",
  "خوب",
  "عالی",
]

const Stars = ({rating, setRating }) => {

  return (
    <Col>
        <p className = "text-muted mt-3">میزان مهارت</p>
        <Rating
          initialValue = {rating}
          rtl
          transition
          showTooltip
          iconsCount = {4}
          tooltipDefaultText = "میزان مهارت"
          tooltipArray = {tooltipArr}
          size = {35}
          onClick = {(rate) => setRating(prevState => ({...prevState, rate}))} />
    </Col>
  )
}

export default Stars