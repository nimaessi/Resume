import { Button, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Resume from "./Resume";
import { useDispatch } from "react-redux";
import { setJobExperience } from "../../features/job-experience/jobSlice";
import { useNavigate } from "react-router-dom";
const Experience = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = (jobExperience) => {
    dispatch(setJobExperience({field: "jobExperience", value: jobExperience}));
    navigate("/resume/select-step");
  }

  return (
    <Resume>
      <p className = "text-center text-muted pt-3">وضعیت شغلی خود را مشخص کنید</p>
      <Row>
        <Col md = {4}></Col>
        <Col md = {4}>
          <div className = "d-grid gap-3">
            <Button 
                variant = "outline-success"
                onClick = {() => clickHandler(false)}>
              <Icon.PersonFill className = "me-2" />
              سابقه کار ندارم 
            </Button>
            <Button 
                variant = "outline-success"
                onClick = {() => clickHandler(true)}>
              <Icon.BriefcaseFill className = "me-2" />
              سابقه کار دارم
            </Button>
          </div>
        </Col>
        <Col md = {4}></Col>
      </Row>
    </Resume>
  )
}

export default Experience