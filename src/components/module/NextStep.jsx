import { Button, Container } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { runValidation } from "../../helper/validate";
import { notifyError } from "../../helper/functions";
import { useDispatch } from "react-redux";
import { setValidate } from "../../features/validation/validationSlice";
import { SELECTSTEP } from "../../routes/routeAddress";

const NextStep = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const clickHandler = () => {
    const res = runValidation(location.pathname);
    dispatch(setValidate(res));
    res.length > 0 ? notifyError("موارد خواسته شده را پر کنید") : navigate(SELECTSTEP)
  }

  return (
    <Container className = "mt-4 bgColorWhite p-3 d-flex justify-content-end myBoxShadow">
        <Button as = {Link} to = {SELECTSTEP} className = "me-3" variant = "outline-info">بازگشت</Button>
        <Button onClick = {clickHandler} variant = "success"> ذخیره و ادامه </Button>
    </Container>
  )
}

export default NextStep;