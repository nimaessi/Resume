import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import iranProvinces from "../../../utils/provinces.js";
import iranCities from "../../../utils/cities.js";
import { useDispatch, useSelector } from "react-redux";
import { selectInformation, setBasicInfo } from "../../../features/information/informationSlice.js";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEffect, useState } from "react";

const FormInfo = () => {

  const dispatch = useDispatch();
  const info = useSelector(selectInformation);
  const { province } = useSelector(selectInformation);
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    if(!event.target){
      const date = new Date(event);
      //convert to persian date => date.toLocaleDateString('fa-IR');
      dispatch(setBasicInfo({field: 'birthday', value: date.toLocaleDateString('fa-IR')}));
    } else{
      dispatch(setBasicInfo({field : event.target.name, value: event.target.value }));
    }
  }
  useEffect(() => {
    setCities(() => {
      return iranCities.filter(item => item.province ===  +province);
    })
  },[province])

  return (  
    <Row>
        <Col md = {7}>
          <Form>
            <Form.Group className="mb-3" controlId="resumeName">
                <Form.Label className = "text-muted p-2">نام رزومه</Form.Label>
                <Form.Control
                  type = "text"
                  name = "resumeName"
                  value = {info.resumeName || ""}
                  maxLength = {20}
                  onChange = {handleChange}
                  placeholder="برای مثال : رزومه معماری" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                  <Form.Label className = "text-muted ms-2">
                    نام
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control 
                    type="text"
                    name = "firstName"
                    value = {info.firstName || ""}
                    maxLength = {30}
                    onChange = {handleChange} 
                    placeholder = "نام" />
                </Form.Group>
                <Form.Group as={Col} controlId="family">
                <Form.Label className = "text-muted ms-2"> 
                    نام خانوادگی
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control 
                    type="text"
                    name = "lastName"
                    value = {info.lastName || ""}
                    onChange = {handleChange}
                    maxLength = {80}
                    placeholder="نام خانوادگی" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="mobile">
                  <Form.Label className = "text-muted ms-2">
                    شماره همراه
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control 
                    type = "tel"
                    name = "mobile"
                    value = {info.mobile || ""}
                    maxLength = {70}
                    onChange = {handleChange}
                    placeholder = "شماره همراه" />
                </Form.Group>
                <Form.Group as = {Col} controlId = "gender">
                  <Form.Label className = "text-muted ms-2">جنسیت
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Select 
                    name = "gender"
                    onChange = {handleChange} 
                    className = "text-muted"
                    value = {info.gender || "none"}  
                    defaultValue = "none">
                    <option className = "text-muted" value = "none">جنسیت</option>
                    <option className = "text-muted" value = "men">مرد</option>
                    <option className = "text-muted" value = "women">زن</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className = "mb-3">
                <Form.Group as = {Col} controlId = "Military_Status">
                  <Form.Label className = "text-muted">
                    نظام وظیفه
                  </Form.Label>
                  <Form.Select
                    name = "militaryStatus"
                    onChange = {handleChange} 
                    className = "text-muted"
                    value = {info.militaryStatus || "none"} 
                    defaultValue = "none">
                    <option className = "text-muted" value = "none">وضعیت نظام وظیفه</option>
                    <option className = "text-muted" value = "educationPardon">معافیت تحصیلی</option>
                    <option className = "text-muted" value = "exemption">معافیت</option>
                    <option className = "text-muted" value = "included">مشمول</option>
                    <option className = "text-muted" value = "end">پایان خدمت</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as = {Col} controlId = "maritalStatus">
                  <Form.Label className = "text-muted">
                    وضعیت تاهل
                  </Form.Label>
                  <Form.Select
                    name = "maritalStatus"
                    onChange = {handleChange} 
                    className = "text-muted"
                    value = {info.maritalStatus || "none"} 
                    defaultValue = "none">
                    <option className = "text-muted" value = "none">وضعیت تاهل</option>
                    <option className = "text-muted" value = "single">مجرد</option>
                    <option className = "text-muted" value = "married">متاهل</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className = "mb-3">
                <Form.Group as = {Col} controlId = "Province">
                  <Form.Label className = "text-muted">
                    استان
                  </Form.Label>
                  <Form.Select
                    name = "province"
                    onChange = {handleChange}
                    className = "text-muted"
                    value = {info.province || 0} 
                    defaultValue = {0}>
                    <option className = "text-muted" value = {0}>استان خود را انتخاب کنید</option>
                    {
                      iranProvinces.map((iranProvince) => {
                        return(
                          <option 
                            key = {iranProvince.id} 
                            className = "text-muted" 
                            value = {iranProvince.id}>
                              {iranProvince.name}
                          </option>
                        )
                      })
                    }
                  </Form.Select>
                </Form.Group>
                <Form.Group as = {Col} controlId = "cities">
                  <Form.Label className = "text-muted">
                    شهر
                  </Form.Label>
                  <Form.Select
                    name = "city"
                    onChange = {handleChange}
                    className = "text-muted"
                    value = {info.city || 0}
                    defaultValue = {0}>
                    <option className = "text-muted" value = {0}>شهر خود را انتخاب کنید</option>
                    {
                      cities.map((item) => {
                        return(
                          <option 
                            key = {item.id} 
                            className = "text-muted" 
                            value = {item.id}>
                            {item.name}
                          </option>
                        )
                      })
                    }
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                  <Form.Label className = "text-muted ms-2">
                    حقوق در خواستی
                  </Form.Label>
                  <Form.Control 
                    type = "number"
                    name = "salary"
                    value = {info.salary || 0}
                    onChange = {handleChange} 
                    placeholder = "حقوق در خواستی" />
                </Form.Group>
                <Form.Group as={Col} controlId="birthday">
                  <Form.Label className = "text-muted ms-2 me-3">
                    تاریخ تولد 
                  </Form.Label>
                  <br/>
                  <DatePicker
                    style = {{height : '35px'}}
                    calendar = {persian}
                    locale = {persian_fa}
                    onChange = {handleChange}
                    value = {info.birthday || ""}
                    calendarPosition = "bottom-right"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label className = "text-muted">آدرس</Form.Label>
                <Form.Control
                  name = "address"
                  type = "text"
                  value = {info.address || ""}
                  maxLength = {120}
                  onChange = {handleChange}/>
              </Form.Group>
          </Form>

        </Col>
        <Col md = {5}></Col>
      </Row>
  )
}

export default FormInfo