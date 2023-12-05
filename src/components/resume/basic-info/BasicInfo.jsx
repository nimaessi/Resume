import { Col, Row } from "react-bootstrap";
import Resume from "../Resume";
import * as Icon from "react-bootstrap-icons";
import FormInfo from "./FormInfo";
import ProgressBar from "../../module/ProgressBar";

const BasicInfo = () => {
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <h5 className = "text-muted p-2">نام رزومه</h5>
          <ProgressBar />
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