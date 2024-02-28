import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import "../../index.css";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { SIGNUP } from "../../routes/routeAddress";
import CardContainer from "../layout/CardContainer";

const Signup = () => {
  return (
    <CardContainer title = "ثبت نام">
      <Form>
        <FloatingLabel className="mt-4" controlId="email-user" label = "ایمیل">
          <Form.Control type = "email" placeholder = "لطفا ایمیل خود را وارد کنید" />
        </FloatingLabel>
        <FloatingLabel className="mt-4" controlId="password" label = "رمز عبور">
          <Form.Control type = "password" placeholder = "رمز عبور"  required/>
        </FloatingLabel>
        <FloatingLabel className="mt-4" controlId="reapeatPass" label = "تکرار رمز عبور">
          <Form.Control type = "password" placeholder = "رمز عبور"  required/>
        </FloatingLabel>
        <div className = "d-grid gap-2 mt-4">
          <Button variant = "danger" as = {Link} to = {SIGNUP}>ثبت نام</Button>
        </div>
      </Form>
    </CardContainer>
  )
}

export default Signup;