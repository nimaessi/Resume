import { Form, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import grade from "../../../utils/grade";
import { useDispatch, useSelector } from "react-redux";
import { selectEdu, setEduInfo } from "../../../features/education/educationSlie";
import { selectValidation } from "../../../features/validation/validationSlice";

const EduForm = () => {
    const dispatch = useDispatch();
    const eduInfo = useSelector(selectEdu);
    const { studying } = useSelector(selectEdu);
    const { validation } = useSelector(selectValidation);
  
    const handleChange = (event, name = "") => {
      if(name === "end" || name === "start"){
        const date = new Date(event);
        dispatch(setEduInfo({field: name, value: date.toLocaleDateString('fa-IR')}));
      }else if(event.target.name === "studying") {
        dispatch(setEduInfo({field: 'studying', value: event.target.checked }));
      }else{
        dispatch(setEduInfo({field : event.target.name, value: event.target.value }));
      }
    }
  return (
    <Form className = "mt-5">
            <Row className = "mb-3">
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2"> 
                  مقطع تحصیلی 
                  <span className = "text-danger fw-bold fs-3"> * </span>
                </Form.Label>
                <Form.Select 
                  name = "grade"
                  className = {validation.includes("grade") ? "bg-danger bg-opacity-25" : " "}
                  onChange = {handleChange}
                  value = {eduInfo.grade || 0}>
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
                <Form.Label className = "text-muted p-2"> 
                  رشته تحصیلی   
                  <span className = "text-danger fw-bold fs-3"> * </span>
                </Form.Label>
                <Form.Control 
                  type = "text"
                  className = {validation.includes("field") ? "bg-danger bg-opacity-25" : " "}
                  onChange = {handleChange}
                  name = "field"
                  value = {eduInfo.field || ""}
                  maxLength = {45} />
              </Form.Group>
            </Row>
            <Form.Group className = "mb-3">
              <Form.Label className = "text-muted p-2">نام دانشگاه</Form.Label>
              <Form.Control 
                type = "text"
                name = "university"
                className = {validation.includes("university") ? "bg-danger bg-opacity-25" : " "}
                value = {eduInfo.university || ""}
                onChange = {handleChange}
                maxLength = {45}/>
            </Form.Group>
            <Row className = "mb-3">
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2">گرایش</Form.Label>
                <Form.Control 
                  type = "text"
                  name = "academicOrientation"
                  className = {validation.includes("academicOrientation") ? "bg-danger bg-opacity-25" : " "}
                  value = {eduInfo.academicOrientation || ""}
                  onChange = {handleChange}
                  maxLength = {30} />
              </Form.Group>
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2">معدل</Form.Label>
                <Form.Control 
                  type = "number"
                  value = {eduInfo.average || ""}
                  className = {validation.includes("average") ? "bg-danger bg-opacity-25" : " "}
                  min = {0}
                  max = {20}
                  onChange = {handleChange}
                  name = "average"/>
              </Form.Group>
            </Row>
            <Row className = "mb-3 align-items-center">
              <Form.Group as = {Col}>
                <Form.Label className = "text-muted p-2"> تاریخ شروع </Form.Label>
                <DatePicker
                    style = {{height : '35px'}}
                    value = {eduInfo.start || ""}
                    name = "start"
                    onChange = {(event) => handleChange(event,"start")}
                    calendar = {persian}
                    locale = {persian_fa}
                    calendarPosition = "bottom-right"/>
              </Form.Group>
              <Form.Group as = {Col}>
                {!studying &&
                  <>
                    <Form.Label className = "text-muted p-2">تاریخ پایان</Form.Label>
                    <DatePicker
                        style = {{height : '35px'}}
                        name = "end"
                        value = {eduInfo.end || ""}
                        calendar = {persian}
                        onChange = {(event) => handleChange(event,"end")}
                        locale = {persian_fa}
                        calendarPosition = "bottom-right"/>
                    </>
                  }
              </Form.Group>
              <Form.Group as = {Col} className = "mt-5">
                <Form.Check 
                  className = "text-muted"
                  type = "checkbox"
                  onChange = {handleChange}
                  checked = {eduInfo.studying}
                  name = "studying"
                  label="تاکنون" />
              </Form.Group>
            </Row>
        </Form>
  )
}

export default EduForm;