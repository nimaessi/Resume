import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const NextStep = ({ nextPath, back}) => {
  return (
    <Container className = "mt-4 bgColorWhite p-3 d-flex justify-content-end myBoxShadow">
        <Button as = {Link} to = {back} className = "me-3" variant = "outline-info">بازگشت</Button>
        <Button as = {Link} to = {nextPath} variant = "success"> ذخیره و ادامه </Button>
    </Container>
  )
}

export default NextStep;