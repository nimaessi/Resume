import { Button, Row } from "react-bootstrap";
import Resume from "../Resume";
import Col from 'react-bootstrap/Col';
import MyProgressBar from "../../module/ProgressBar";
import SkillForm from "./SkillForm";

const Skills = () => {
  return (
    <Resume>
        <Row>
            <Col md = {7}>
                <MyProgressBar/>
                <SkillForm />
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