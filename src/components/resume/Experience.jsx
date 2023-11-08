import { Button, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import JobStatus from "./JobStatus";
import Resume from "./Resume";
const Experience = () => {

  const [jobStatus, setJobStatus] = useState(false);

  return (
    <Resume>
      <p className = "text-center text-muted pt-3">وضعیت شغلی خود را مشخص کنید</p>
      <Row>
        <Col md = {4}></Col>
        <Col md = {4}>
          <div className = "d-grid gap-3">
            <Button 
                variant = "outline-success"
                onClick = {() => setJobStatus(false)}>
              <Icon.PersonFill className = "me-2" />
              سابقه کار ندارم 
            </Button>
            <Button 
                variant = "outline-success"
                onClick = {() => setJobStatus(true)}>
              <Icon.BriefcaseFill className = "me-2" />
              سابقه کار دارم
            </Button>
          </div>
        </Col>
        <Col md = {4}></Col>
      </Row>
      {jobStatus &&  <JobStatus />}
    </Resume>
  )
}

export default Experience