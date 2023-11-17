import Top from "./Top";
import { Container } from "react-bootstrap";
import NextStep from "../module/NextStep";

const Resume = ({ children ,nextPath ,back }) => {


  return (
  <>
    <Top  />
    <Container className = "mt-4 bgColorWhite p-3 myBoxShadow">
      { children }
    </Container>
    <NextStep nextPath = {nextPath} back = {back} />
  </>
  )
}

export default Resume;