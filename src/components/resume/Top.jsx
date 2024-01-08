import * as Icon from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectInformation } from "../../features/information/informationSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPathTitle } from "../../helper/functions";
const Top = () => {

  const { resumeName } = useSelector(selectInformation);
  const [ pathTitle, setPathTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPathTitle(getPathTitle(location.pathname));
  },[location]);

  return (
    <Container fluid>
      <Row className = "p-5 bgColorWhite myBoxShadow">
        <Col md = {12}>
          <span className = "text-muted fs-4 w-25">{ resumeName ? resumeName : "رزومه من" }</span>
          <Icon.ChevronLeft className = "text-success fs-2 ms-2" />
          <span className = "text-muted fs-4 w-25">{ pathTitle }</span>
        </Col>  
      </Row>
    </Container>
  )
}

export default Top;