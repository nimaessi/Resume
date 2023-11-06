import * as Icon from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";

const Top = () => {
  return (
    <Container fluid>
      <Row className = "p-5 bgColorWhite myBoxShadow">
        <Col md = {12}>
          <span className = "text-muted fs-4 w-25">رزومه‌های من</span>
          <Icon.ChevronLeft className = "text-success fs-2 ms-2" />
          <span className = "text-muted fs-4 w-25">ساخت رزومه - وضعیت شغلی</span>
        </Col>  
      </Row>
    </Container>
  )
}

export default Top;