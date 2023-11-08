import Top from "./Top";
import Experience from "./Experience";
import JobStatus from "./JobStatus";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Resume = ({ children }) => {


  return (
  <>
    <Top  />
    <Container className = "mt-4 bgColorWhite p-3">
      { children }
    </Container>
  </>
  )
}

export default Resume;