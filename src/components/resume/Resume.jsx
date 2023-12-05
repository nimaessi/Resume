import Top from "./Top";
import { Container } from "react-bootstrap";
import NextStep from "../module/NextStep";

const Resume = ({ children, displayBtn = true }) => {


  return (
  <>
    <Top  />
    <Container className = "mt-4 bgColorWhite p-3 myBoxShadow">
      { children }
    </Container>
    {displayBtn && <NextStep />}
  </>
  )
}

export default Resume;