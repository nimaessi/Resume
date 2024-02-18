import { Form, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useSelector } from "react-redux";
import { selectValidation } from "../../../features/validation/validationSlice";
const JobForm = ({jobItem, setJobItem}) => {

    const { validation } = useSelector(selectValidation);
    const handleChange = (event, inputName = "") => {
        if(!event.target){
            const date = new Date(event);
            setJobItem({...jobItem, [inputName]: date.toLocaleDateString('fa-IR')});
        } else{
            setJobItem({...jobItem, [event.target.name]: event.target.value})
        }
    }
  return (
    <Form className = "mt-5">
        <Form.Group className="mb-3">
            <Form.Label>گروه شغلی</Form.Label>
            <Form.Control
                name = "jobGroup"
                className = {validation.includes("jobGroup") ? "bg-danger bg-opacity-25" : " "}
                value = {jobItem.jobGroup || ""}
                type = "text"
                onChange = {handleChange}
                maxLength = {30}/>
        </Form.Group>

        <Row className = "mb-3">
            <Form.Group as = {Col}>
                <Form.Label>عنوان شغلی</Form.Label>
                <Form.Control
                    name = "jobTitle"
                    className = {validation.includes("jobTitle") ? "bg-danger bg-opacity-25" : " "}
                    value = {jobItem.jobTitle || ""}
                    type = "text"
                    onChange = {handleChange}
                    maxLength = {30}/>
            </Form.Group>
            <Form.Group as = {Col}>
                <Form.Label>نام شرکت</Form.Label>
                <Form.Control
                    name = "company"
                    className = {validation.includes("company") ? "bg-danger bg-opacity-25" : " "}
                    value = {jobItem.company || ""}
                    type = "text"
                    onChange = {handleChange}
                    maxLength = {30}/>
            </Form.Group>
        </Row>
        <Row className = "mt-5 mb-3 align-items-center">
            <Form.Group as = {Col}>
                    <Form.Label className = "text-muted p-2"> تاریخ شروع </Form.Label>
                    <DatePicker
                        style = {{height : '35px'}}
                        name = "start"
                        value = {jobItem.start || ""}
                        onChange = {(event) => handleChange(event, "start")}
                        calendar = {persian}
                        locale = {persian_fa}
                        calendarPosition = "bottom-right"/>
            </Form.Group>
            <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2"> تاریخ پایان </Form.Label>
                <DatePicker
                    style = {{height : '35px'}}
                    name = "end"
                    calendar = {persian}
                    value = {jobItem.end || ""}
                    onChange = {(event) => handleChange(event, "end")}
                    locale = {persian_fa}
                    calendarPosition = "bottom-right"/>
            </Form.Group>
        </Row>

    </Form>
  )
}

export default JobForm;