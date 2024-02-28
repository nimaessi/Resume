import { Alert, Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import "../../index.css";
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import { SELECTSTEP, SIGNUP } from "../../routes/routeAddress";
import CardContainer from "../layout/CardContainer";
import { validateLogin } from "../../helper/validate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectValidation, setValidate } from "../../features/validation/validationSlice";
const Home = () => {

  const [formValue, setFormData] = useState({email: "", password: ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { validation } = useSelector(selectValidation); 
  const clickHandler = () => {
    const resValidate = validateLogin(formValue);
    dispatch(setValidate(resValidate));
    resValidate.length == 0 ? navigate(SELECTSTEP): ""
  }
  return (
   <CardContainer title = "ورود">
      { validation.length > 0 && 
        <Alert variant = "danger" className = "fs-14 mt-2">
          <Icon.ExclamationDiamond className = "me-2" /> موارد خواسته شده را به درستی پر کنید
        </Alert>
      }
      <Form>
        <FloatingLabel className="mt-4" label = "ایمیل">
          <Form.Control 
            type = "email" 
            name = "email"
            className = {validation.includes("email") ? "bg-danger bg-opacity-25" : " "}
            onChange = {(event) => {
              setFormData(values => ({...values, email: event.target.value }));
            }} 
            placeholder = "لطفا ایمیل خود را وارد کنید" />
        </FloatingLabel>
        <FloatingLabel className="mt-4"  label = "رمز عبور">
          <Form.Control 
            type = "password" 
            name = "password"
            className = {validation.includes("password") ? "bg-danger bg-opacity-25" : " "}
            onChange = {(event) => {
              setFormData(values => ({...values, password: event.target.value }));
            }}  
            placeholder = "رمز عبور" />
        </FloatingLabel>

        <div className = "d-grid gap-2 mt-4">
          <Button variant = "success" onClick = {clickHandler}>ورود</Button>
        </div>
        <div className = "d-grid gap-2 mt-4">
          <Button variant = "danger" as = {Link} to = {SIGNUP}>ثبت نام</Button>
        </div>
      </Form>
      <div className = "d-grid gap-3 mt-5">
        <Button className = "fs-14" variant = "outline-secondary"> 
          ورود با گوگل 
          <Icon.Google className='m-2 text-bg-danger'/>
        </Button> 
        <Button className = "fs-14" variant = "outline-secondary">
            ورود با لینکدین 
          <Icon.Linkedin className='m-2 text-bg-primary'/>
        </Button> 
      </div>
   </CardContainer>
  )
}

export default Home;