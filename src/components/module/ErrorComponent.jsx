import { Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { SELECTSTEP } from "../../routes/routeAddress";

const ErrorComponent = () => {
  return (
    <Container fluid className = "d-flex flex-column align-items-center justify-content-center vh-100 overflow-hidden">
        <p className = "text-warning fs-1"><Icon.ExclamationTriangleFill /></p>
        <p className = "fs-2 text-muted">خطایی رخ داده است :(</p>
        <Link className = "text-decoration-none text-success" to = {SELECTSTEP}>بازگشت صفحه اصلی</Link>
    </Container>
  )
}

export default ErrorComponent;