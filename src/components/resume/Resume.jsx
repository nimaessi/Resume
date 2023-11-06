import Top from "./Top";
import Experience from "./Experience";
import JobStatus from "./JobStatus";
import { useState } from "react";
import BasicInfo from "./BasicInfo";

const Resume = () => {

  const [jobStatus, setJobStatus] = useState(false);

  return (
  <>
    <Top  />
    <Experience setJobStatus = {setJobStatus}/>
    {jobStatus &&  <JobStatus />}
  </>
  )
}

export default Resume;