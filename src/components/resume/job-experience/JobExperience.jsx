import Resume from "../Resume";
import MyProgressBar from "../../module/ProgressBar";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import JobForm from "./JobForm";

const JobExperience = () => {
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <MyProgressBar/>
          <JobForm />
        </Col>
        <Col md = {5}></Col>
      </Row>
    </Resume>
  )
}

export default JobExperience;