import Top from "./Top";
import { Container } from "react-bootstrap";
import NextStep from "../module/NextStep";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Resume = ({ children, displayBtn = true }) => {

  return (
  <>
    <Top  />
    <Container className = "mt-4 bgColorWhite p-3 myBoxShadow">
      <ToastContainer className = "fw-bolder" />
      { children }
      <ToastContainer />
    </Container>
    {displayBtn && <NextStep />}
  </>
  )
}

export default Resume;