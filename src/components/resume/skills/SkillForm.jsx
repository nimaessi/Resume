import { Form, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Stars from "./Stars";

const SkillForm = ({rating, setRating}) => {
  const handleChange = (event) => {
      setRating(prevState => ({...prevState, skill: event.target.value}));
  }
  return (
    <Row className = "mb-3">
        <Form.Group className = "mt-4" as = {Col}>
            <Form.Label className = "text-muted">نام مهارت</Form.Label>
            <Form.Control 
                type = "text"
                value = {rating.skill || ""}
                onChange = {handleChange}
                name = "skill" />
        </Form.Group>
        <Stars rating = {rating.rate} setRating = {setRating} />
    </Row>
  )
}

export default SkillForm;