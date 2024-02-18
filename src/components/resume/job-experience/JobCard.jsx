import { Button, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteJobExperience } from "../../../features/job-experience/jobSlice";

const JobCard = ({company, id, end, start, jobTitle, jobGroup}) => {

  const dispatch = useDispatch();
  const deleteJobExp = (id) => {
    dispatch(deleteJobExperience(id));
  }
  return (
    <Card className = "mt-5">
        <Card.Body>
            <Card.Title>{ jobGroup }</Card.Title>
            <Card.Subtitle className="mb-3 mt-3 text-muted">{jobTitle}</Card.Subtitle>
            <Card.Text className = "text-muted">{company}</Card.Text>
            <Card.Text className = "text-muted fs-14">شروع {start} پایان {end}</Card.Text>
            <Button onClick = {() => deleteJobExp(id) } variant = "danger" className = "w-25 mt-3">
                <Icon.TrashFill/> حذف
            </Button>
        </Card.Body>
    </Card>
  )
}

export default JobCard;