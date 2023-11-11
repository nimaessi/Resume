import { Col, ProgressBar, Row } from "react-bootstrap";
import Resume from "../Resume";

const BasicInfo = () => {
  return (
    <Resume>
      <Row>
        <Col md = {8}>
          <h5 className = "text-muted p-2">نام رزومه</h5>
          <span className = "text-muted fs-14 p-2">درصد تکمیل 15</span>
          <ProgressBar className = "mt-2" variant = "danger" now = {15} />
        </Col>
        <Col md = {4}></Col>
      </Row>
    </Resume>
  )
}

export default BasicInfo;