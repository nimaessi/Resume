import { Form, Row } from "react-bootstrap";
import Resume from "../Resume";
import Col from 'react-bootstrap/Col';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import grade from "../../../utils/grade";
const Education = () => {
  return (
    <Resume>
      <Row>
        <Col md = {7}>
          <Form>
            <Row className = "mb-3">
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2"> مقطع تحصیلی</Form.Label>
                <Form.Select 
                  name = "grade"
                  defaultValue = {0}>
                  <option className = "text-muted" value = {0}>مقطع تحصیلی خود را انتخاب کنید.</option>
                  {
                    grade.map(item => {
                      return(
                        <option
                          key = {item.id} 
                          className = "text-muted" 
                          value = {item.id}>
                          {item.label}
                        </option>
                      )
                    })
                  }
                </Form.Select>
              </Form.Group>
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2"> رشته تحصیلی</Form.Label>
                <Form.Control 
                  type = "text"
                  name = "field"
                  maxLength = {30} />
              </Form.Group>
            </Row>
            <Form.Group className = "mb-3">
              <Form.Label className = "text-muted p-2">نام دانشگاه</Form.Label>
              <Form.Control 
                type = "text"
                name = "university"
                maxLength = {30}/>
            </Form.Group>
            <Row className = "mb-3">
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2">گرایش</Form.Label>
                <Form.Control 
                  type = "text"
                  name = "academicOrientation"
                  maxLength = {30} />
              </Form.Group>
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2">معدل</Form.Label>
                <Form.Control 
                  type = "number"
                  min = {0}
                  max = {20}
                  name = "average"/>
              </Form.Group>
            </Row>
            <Row className = "mb-3 align-items-center">
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
                <Form.Label className = "text-muted p-2">تاریخ پایان</Form.Label>
                <DatePicker
                    style = {{height : '35px'}}
                    name = "end"
                    calendar = {persian}
                    locale = {persian_fa}
                    calendarPosition = "bottom-right"/>
              </Form.Group>
              <Form.Group as = {Col} className = "mt-5">
                <Form.Check 
                  className = "text-muted" 
                  type="checkbox"
                  name = "studying" 
                  label="تاکنون" />
              </Form.Group>
            </Row>
          </Form>
        </Col>
        <Col md = {5}></Col>
      </Row>
    </Resume>
  )
}

export default Education;