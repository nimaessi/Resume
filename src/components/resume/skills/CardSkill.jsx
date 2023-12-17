import { Button, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeSkill } from "../../../features/skills/skillSlice";
const CardSkill = ({skill, rating, cardId}) => {

  const dispatch = useDispatch();
  const deleteSkill = (id) => {
    console.log("REMOVE =>", id);
    dispatch(removeSkill(id));
  }
  return (
    <Card className = "mt-5 mb-5">
        <Card.Body className = "d-flex flex-row">
            <h6 className = "me-2 mt-2 text-muted fw-bold">{skill}</h6>
            { 
                [...new Array(4)].map(( _ ,index) => {
                    return index < rating ? <Icon.StarFill className = "text-warning mt-2" key = {index}/> : 
                    <Icon.StarFill className = "text-muted mt-2" key = {index} />
                })
            }
            <Button onClick = {() => deleteSkill(cardId)} className = "ms-auto" variant = "light">
              <Icon.TrashFill className = "text-muted" />
            </Button>
        </Card.Body>
    </Card>
  )
}

export default CardSkill;