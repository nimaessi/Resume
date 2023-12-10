import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';

const Stars = () => {
  return (
    <Col>
        <p className = "text-muted mt-4">میزان مهارت</p>
        <Icon.StarFill className = "text-warning me-2 fs-4" />
        <Icon.StarFill className = "text-warning me-2 fs-4" />
        <Icon.StarFill className = "text-warning me-2 fs-4" />
        <Icon.StarFill className = "text-warning me-2 fs-4" />
        <Icon.StarFill className = "text-warning me-2 fs-4" />
    </Col>
  )
}

export default Stars