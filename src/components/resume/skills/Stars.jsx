import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';
import styles from "./skill.module.css";
import Tooltips from './Tooltips';
const Stars = () => {
  return (
    <Col>
        <p className = "text-muted mt-4">میزان مهارت</p>
        <Tooltips text = "ضعیف">
          <Icon.StarFill id = "r1" className = {`${styles.stars} me-2 fs-4`} />
        </Tooltips>
        <Tooltips text = "متوسط">
          <Icon.StarFill id = "r2" className = {`${styles.stars} me-2 fs-4`} />
        </Tooltips>
        <Tooltips text = "خوب">
          <Icon.StarFill id = "r3" className = {`${styles.stars} me-2 fs-4`} />
        </Tooltips>
        <Tooltips text = "عالی">
          <Icon.StarFill id = "r4" className = {`${styles.stars} me-2 fs-4`}/>
        </Tooltips>
    </Col>
  )
}

export default Stars