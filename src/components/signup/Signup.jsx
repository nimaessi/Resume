import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import "../../index.css";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { SIGNUP } from "../../routes/routeAddress";

const Signup = () => {
  return (
      <Container fluid className = "d-flex align-items-center justify-content-center vh-100 overflow-hidden">
        <Card bg = "light" style={{ width: '30rem' }}>
          <Card.Header className = "text-center">رزومه ساز</Card.Header>
          <Card.Body>
            <Card.Title className = "fs-16">ثبت نام </Card.Title>
            <Card.Subtitle className = "text-black-50 mt-3 fs-14">لطفا ایمیل خود را وارد نمایید.</Card.Subtitle>
            <Form>
              <FloatingLabel className="mt-4" controlId="floatingInput" label = "ایمیل">
                <Form.Control type = "email" placeholder = "لطفا ایمیل خود را وارد کنید" />
              </FloatingLabel>
              <FloatingLabel className="mt-4" controlId="floatingInput" label = "رمز عبور">
                <Form.Control type = "password" placeholder = "رمز عبور"  required/>
              </FloatingLabel>
              <FloatingLabel className="mt-4" controlId="floatingInput" label = "تکرار رمز عبور">
                <Form.Control type = "password" placeholder = "رمز عبور"  required/>
              </FloatingLabel>
              <div className = "d-grid gap-2 mt-4">
                <Button variant = "danger" as = {Link} to = {SIGNUP}>ثبت نام</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
  )
}

export default Signup;