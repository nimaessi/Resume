import { Button, Form, Row } from "react-bootstrap";
import Resume from "../Resume";
import Col from 'react-bootstrap/Col';
import MyProgressBar from "../../module/ProgressBar";
import * as Icon from 'react-bootstrap-icons';
const Skills = () => {
  return (
    <Resume>
        <Row>
            <Col md = {7}>
                <MyProgressBar/>
                <Row className = "mb-3">
                    <Form.Group className = "mt-4" as = {Col}>
                        <Form.Label className = "text-muted">نام مهارت</Form.Label>
                        <Form.Control 
                            type = "text"
                            name = "skill" />
                    </Form.Group>
                    <Col>
                        <p className = "text-muted mt-4">میزان مهارت</p>
                        <Icon.StarFill className = "text-warning me-2 fs-4" />
                        <Icon.StarFill className = "text-warning me-2 fs-4" />
                        <Icon.StarFill className = "text-warning me-2 fs-4" />
                        <Icon.StarFill className = "text-warning me-2 fs-4" />
                        <Icon.StarFill className = "text-warning me-2 fs-4" />
                    </Col>
                </Row>
                <div className = "d-grid gap-2 mt-5">
                    <Button variant = "outline-success">+ افزودن</Button>
                </div>
            </Col>
            <Col md = {5}></Col>
        </Row>
    </Resume>
  )
}

export default Skills