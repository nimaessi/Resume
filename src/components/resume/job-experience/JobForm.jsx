import { Form, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const JobForm = () => {
  return (
    <Form className = "mt-5">
        <Form.Group className="mb-3">
            <Form.Label>گروه شغلی</Form.Label>
            <Form.Control
                name = "jobGroup"
                type = "text"
                maxLength = {30}/>
        </Form.Group>

        <Row className = "mb-3">
            <Form.Group as = {Col}>
                <Form.Label>عنوان شغلی</Form.Label>
                <Form.Control
                    name = "jobTitle"
                    type = "text"
                    maxLength = {30}/>
            </Form.Group>
            <Form.Group as = {Col}>
                <Form.Label>عنوان شغلی</Form.Label>
                <Form.Control
                    name = "company"
                    type = "text"
                    maxLength = {30}/>
            </Form.Group>
        </Row>
        <Row className = "mt-5 mb-3 align-items-center">
            <Form.Group as = {Col}>
                    <Form.Label className = "text-muted p-2"> تاریخ شروع </Form.Label>
                    <DatePicker
                        style = {{height : '35px'}}
                        name = "start"
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
                    locale = {persian_fa}
                    calendarPosition = "bottom-right"/>
            </Form.Group>
        </Row>

    </Form>
  )
}

export default JobForm;