import * as Icon from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectSkill } from "../../../features/skills/skillSlice";
const SkillPDF = () => {
    
    const skills = useSelector(selectSkill);
  return (
    <>
    <h6 className = "mt-5 pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75 w-75">
        <Icon.BuildingCheck className = "text-success me-2" />مهارت ها
    </h6>
        <Row>
            <Col md = {6}>
                {skills.skill.map((item,index) => {
                    if(index % 2 == 0){
                        return(
                            <p className = "text-muted ms-2 mt-3" key = {item.id}>
                            {item.skill}
                            { 
                                [...new Array(4)].map((arr,index) => {
                                    return index < item.rate ? <Icon.StarFill className = "text-warning ms-2" /> 
                                    : <Icon.StarFill className = "text-muted ms-2" />
                                })
                            }
                            </p>
                        )
                    }
                })}
            </Col>
            <Col md = {6}>
                {skills.skill.map((item,index) => {
                    if(index % 2 != 0){
                        return(
                            <p className = "text-muted ms-2 mt-3" key = {item.id}>
                            {item.skill}
                            { 
                                [...new Array(4)].map((arr,index) => {
                                    return index < item.rate ? <Icon.StarFill className = "text-warning ms-2" /> 
                                    : <Icon.StarFill className = "text-muted ms-2" />
                                })
                            }
                            </p>
                        )
                    }
                })}
            </Col>
        </Row>
    </>
  )
}

export default SkillPDF;