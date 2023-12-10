import { Form, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Stars from "./Stars";
const SkillForm = () => {
  return (
    <Row className = "mb-3">
        <Form.Group className = "mt-4" as = {Col}>
            <Form.Label className = "text-muted">نام مهارت</Form.Label>
            <Form.Control 
                type = "text"
                name = "skill" />
        </Form.Group>
        <Stars />
    </Row>
  )
}

export default SkillForm;