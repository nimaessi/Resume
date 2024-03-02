import { Alert, Button, FloatingLabel, Form} from "react-bootstrap";
import "../../index.css";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import CardContainer from "../layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectValidation, setValidate } from "../../features/validation/validationSlice";
import { useState } from "react";
import { validateSignup } from "../../helper/validate";
import { SELECTSTEP } from "../../routes/routeAddress";

const Signup = () => {
  const [formData, setFormData] = useState({email: "", password: "", passwordRepeat: ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { validation } = useSelector(selectValidation);
  const clickHandler = () => {
    const resValidate = validateSignup(formData);
    dispatch(setValidate(resValidate));
    resValidate.length == 0 ? navigate(SELECTSTEP): null
  }

  return (
    <CardContainer title = "ثبت نام">
      { validation.length > 0 && 
        <Alert variant = "danger" className = "fs-14 mt-2">
          <Icon.ExclamationDiamond className = "me-2" /> موارد خواسته شده را به درستی پر کنید
        </Alert>
      }
      <Form>
        <FloatingLabel className="mt-4"  label = "ایمیل">
          <Form.Control 
            name = "email" 
            type = "email" 
            className = {validation.includes("email") ? "bg-danger bg-opacity-25" : " "}
            onChange = {(event) => {
              setFormData(values => ({...values, email: event.target.value }));
            }} 
            placeholder = "لطفا ایمیل خود را وارد کنید" />
        </FloatingLabel>
        <FloatingLabel className="mt-4" label = "رمز عبور">
          <Form.Control 
            name = "password" 
            type = "password" 
            className = {validation.includes("password") ? "bg-danger bg-opacity-25" : " "}
            onChange = {(event) => {
              setFormData(values => ({...values, password: event.target.value }));
            }} 
            placeholder = "رمز عبور" />
        </FloatingLabel>
        <FloatingLabel className="mt-4" label = "تکرار رمز عبور">
          <Form.Control 
            name = "passwordRepeat" 
            type = "password"
            className = {validation.includes("passwordRepeat") ? "bg-danger bg-opacity-25" : " "}
            onChange = {(event) => {
              setFormData(values => ({...values, passwordRepeat: event.target.value }));
            }} 
            placeholder = "رمز عبور"/>
        </FloatingLabel>
        <div className = "d-grid gap-2 mt-4">
          <Button variant = "danger" onClick = {clickHandler}>ثبت نام</Button>
        </div>
      </Form>
    </CardContainer>
  )
}

export default Signup;