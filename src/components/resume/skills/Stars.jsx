import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const tooltipArr = [
  "ضعیف",
  "متوسط",
  "خوب",
  "عالی",
]

const Stars = () => {

  const [rating, setRating] = useState(0);
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
          onClick = {(rate) => setRating(rate)} />
    </Col>
  )
}

export default Stars