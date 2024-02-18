import Resume from "../Resume";
import MyProgressBar from "../../module/ProgressBar";
import { Row, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import JobForm from "./JobForm";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { selectJob, setJobExperience } from "../../../features/job-experience/jobSlice";
import { useState } from "react";

const initialState = {
  jobGroup: "", 
  jobTitle: "", 
  company: "", 
  start: "", 
  end: ""
};

const JobExperience = () => {

  const job = useSelector(selectJob);
  const dispatch = useDispatch();
  const [jobItem, setJobItem] = useState(initialState);

  const submitHandler = () => {
    dispatch(setJobExperience(jobItem));
    setJobItem(initialState);
  }
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <MyProgressBar/>
          {
          job.experience.map((item) => <JobCard {...item} />)
          }
          <JobForm jobItem = {jobItem} setJobItem = {setJobItem} />
          <div className = "d-grid gap-2 mt-5">
            <Button onClick = {submitHandler}  variant = "outline-success">+ افزودن</Button>
          </div>
        </Col>
        <Col md = {5}></Col>
      </Row>
    </Resume>
  )
}

export default JobExperience;