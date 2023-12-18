import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Resume from "../Resume";
import MyProgressBar from "../../module/ProgressBar";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { useDispatch, useSelector } from "react-redux";
import { selectInformation, setBasicInfo } from "../../../features/information/informationSlice";

const FurtherInformation = () => {

    const dispatch = useDispatch();
    const info = useSelector(selectInformation);
    const handleChange = (event) => {
        dispatch(setBasicInfo({field: event.target.name, value: event.target.value}));
    }
  return (
    <Resume>
        <Row>
            <Col md = {7}>
                <MyProgressBar />
                <InputGroup>
                    <InputGroupText className = "mt-5 text-muted">اطلاعات تکمیلی</InputGroupText>
                    <Form.Control
                        style = {{resize: "none"}}
                        value = {info.additionalInformation || ""}
                        rows = {15}
                        maxLength = {500}
                        onChange = {handleChange}
                        className = "mt-5 text-muted" 
                        name = "additionalInformation" 
                        as = "textarea"
                        aria-label = "اطلاعات تکمیلی" />
                </InputGroup>
            </Col>
            <Col md = {5}></Col>
        </Row>
    </Resume>
  )
}

export default FurtherInformation;