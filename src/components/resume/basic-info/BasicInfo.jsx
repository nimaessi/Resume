import { Col, Row } from "react-bootstrap";
import Resume from "../Resume";
import * as Icon from "react-bootstrap-icons";
import FormInfo from "./FormInfo";
import ProgressBar from "../../module/ProgressBar";
import { useSelector } from "react-redux";
import { selectInformation } from "../../../features/information/informationSlice";
import { notify } from "../../../helper/functions";

const BasicInfo = () => {
  const { resumeName } = useSelector(selectInformation);
  notify();
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <h6 className = "text-muted p-2">{ resumeName ? resumeName : "نام رزومه" }</h6>
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