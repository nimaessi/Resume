import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import iranProvinces from "../../../utils/provinces.js";
import iranCities from "../../../utils/cities.js";

const FormInfo = () => {
  return (  
    <Row>
        <Col md = {7}>
          <Form>
            <Form.Group className="mb-3" controlId="ResName">
                <Form.Label className = "text-muted p-2">نام رزومه</Form.Label>
                <Form.Control placeholder="برای مثال : رزومه معماری" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                  <Form.Label className = "text-muted ms-2">
                    نام
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder = "نام" />
                </Form.Group>
                <Form.Group as={Col} controlId="family">
                <Form.Label className = "text-muted ms-2"> 
                    نام خانوادگی
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="نام خانوادگی" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="mobile">
                  <Form.Label className = "text-muted ms-2">
                    شماره همراه
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder = "شماره همراه" />
                </Form.Group>
                <Form.Group as = {Col} controlId = "gender">
                  <Form.Label className = "text-muted ms-2">جنسیت
                    <span className = "text-danger fw-bold fs-3"> * </span>
                  </Form.Label>
                  <Form.Select className = "text-muted"  defaultValue = "none">
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
                  <Form.Select className = "text-muted" defaultValue = "none">
                    <option className = "text-muted" value = "none">وضعیت نظام وظیفه</option>
                    <option className = "text-muted" value = "men">معافیت تحصیلی</option>
                    <option className = "text-muted" value = "none">معافیت</option>
                    <option className = "text-muted" value = "men">مشمول</option>
                    <option className = "text-muted" value = "women">پایان خدمت</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as = {Col} controlId = "Military_Status">
                  <Form.Label className = "text-muted">
                    وضعیت تاهل
                  </Form.Label>
                  <Form.Select className = "text-muted" defaultValue = "none">
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
                  <Form.Select className = "text-muted" defaultValue = "none">
                    <option className = "text-muted" value = {0}>استان خود را انتخاب کنید</option>
                    {
                      iranProvinces.map((iranProvince) => {
                        return(
                          <option className = "text-muted" value = {iranProvince.id}>{iranProvince.name}</option>
                        )
                      })
                    }
                  </Form.Select>
                </Form.Group>
                <Form.Group as = {Col} controlId = "cities">
                  <Form.Label className = "text-muted">
                    شهر
                  </Form.Label>
                  <Form.Select className = "text-muted" defaultValue = "none">
                    <option className = "text-muted" value = {0}>شهر خود را انتخاب کنید</option>
                    {
                      iranCities.map((iranCities) => {
                        return(
                          <option className = "text-muted" value = {iranCities.id}>{iranCities.name}</option>
                        )
                      })
                    }
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label className = "text-muted">آدرس</Form.Label>
                <Form.Control />
              </Form.Group>
          </Form>

        </Col>
        <Col md = {5}></Col>
      </Row>
  )
}

export default FormInfo