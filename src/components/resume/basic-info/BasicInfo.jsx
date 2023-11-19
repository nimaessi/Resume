import { Col, ProgressBar, Row } from "react-bootstrap";
import Resume from "../Resume";
import * as Icon from "react-bootstrap-icons";
import FormInfo from "./FormInfo";

const BasicInfo = () => {
  return (
    <Resume nextPath = "/" back = "/resume">
      <Row>
        <Col md = {7}>
          <h5 className = "text-muted p-2">نام رزومه</h5>
          <span className = "text-muted fs-14 p-2">درصد تکمیل 15</span>
          <ProgressBar className = "mt-2" variant = "danger" now = {15} />
          <div className = "d-flex align-items-center">
            <Icon.PersonCircle className = "display-1 text-muted m-4" />
            <h6 className = "text-muted">بارگذاری تصویر</h6>
          </div>
        </Col>
        <Col md = {5}></Col>
      </Row>
      <FormInfo />
    </Resume>
  )
}

export default BasicInfo;