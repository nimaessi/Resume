import { Button, Container } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { runValidation } from "../../helper/validate";
import { notifyError } from "../../helper/functions";

const NextStep = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const clickHandler = () => {
    const res = runValidation(location.pathname);
    res.length > 0 ? notifyError("موارد خواسته شده را به درستی پر کنید") : navigate("/resume/select-step")
  }

  return (
    <Container className = "mt-4 bgColorWhite p-3 d-flex justify-content-end myBoxShadow">
        <Button as = {Link} to = {"/resume/select-step"} className = "me-3" variant = "outline-info">بازگشت</Button>
        <Button onClick = {clickHandler} variant = "success"> ذخیره و ادامه </Button>
    </Container>
  )
}

export default NextStep;