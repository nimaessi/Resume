import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import iranProvinces from "../../../utils/provinces.js";
import iranCities from "../../../utils/cities.js";
import { useDispatch } from "react-redux";
import { setBasicInfo } from "../../../features/information/informationSlice.js";
const FormInfo = () => {

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setBasicInfo({field : event.target.name, value: event.target.value }));
  }

  return (  
    <Row>
        <Col md = {7}>
          <Form>
            <Form.Group className="mb-3" controlId="resumeName">
                <Form.Label className = "text-muted p-2">نام رزومه</Form.Label>
                <Form.Control
                  type = "text"
                  name = "resumeName"
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
                    defaultValue = "none">
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
                    defaultValue = "none">
                    <option className = "text-muted" value = {0}>شهر خود را انتخاب کنید</option>
                    {
                      iranCities.map((iranCities) => {
                        return(
                          <option 
                            key = {iranCities.id} 
                            className = "text-muted" 
                            value = {iranCities.id}>
                            {iranCities.name}
                          </option>
                        )
                      })
                    }
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label className = "text-muted">آدرس</Form.Label>
                <Form.Control
                  name = "address"
                  type = "text"
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