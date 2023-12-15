import { Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const CardSkill = ({skill, rating}) => {
  return (
    <Card className = "mt-5 mb-5">
        <Card.Body className = "d-flex flex-row">
            <h6 className = "me-2 text-muted fw-bold">{skill}</h6>
            { 
                [...new Array(4)].map(( _ ,index) => {
                    return index < rating ? <Icon.StarFill className = "text-warning" key = {index}/> : 
                    <Icon.StarFill className = "text-muted" key = {index} />
                })
            }
        </Card.Body>
    </Card>
  )
}

export default CardSkill;