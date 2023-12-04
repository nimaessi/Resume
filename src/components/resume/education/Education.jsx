import { Row } from "react-bootstrap";
import Resume from "../Resume";
import Col from 'react-bootstrap/Col';
import MyProgressBar from "../../module/ProgressBar";
import EduForm from "./EduForm";
const Education = () => {
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <MyProgressBar/>
          <EduForm />
        </Col>
        <Col md = {5}></Col>
      </Row>
    </Resume>
  )
}

export default Education;