import { Button, Row } from "react-bootstrap";
import Resume from "../Resume";
import Col from 'react-bootstrap/Col';
import MyProgressBar from "../../module/ProgressBar";
import SkillForm from "./SkillForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSkill, setSkill } from "../../../features/skills/skillSlice";
import CardSkill from "./CardSkill";
const Skills = () => {

  const [rating, setRating] = useState({skill: "", rate: 0});
  const dispatch = useDispatch();
  const skills = useSelector(selectSkill);

  const submitHandler = () => {
    dispatch(setSkill(rating));
    setRating({skill: "", rate: 0});
  }
  return (
    <Resume>
        <Row>
            <Col md = {7}>
                <MyProgressBar/>
                {
                  skills.skill.map((item, index) => <CardSkill key = {index} skill = {item.skill} rating = {item.rate} />)
                }
                <SkillForm rating = {rating} setRating = {setRating} />
                <div className = "d-grid gap-2 mt-5">
                    <Button onClick = {submitHandler} variant = "outline-success">+ افزودن</Button>
                </div>
            </Col>
            <Col md = {5}></Col>
        </Row>
    </Resume>
  )
}

export default Skills;