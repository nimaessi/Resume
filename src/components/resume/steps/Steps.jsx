import { Link } from "react-router-dom";
import Resume from "../Resume";
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectJob } from "../../../features/job-experience/jobSlice";
import { ADDITIONALINFO, BASICINFO, EDUCATION, GENERATEPDF, JOBEXPERIENCE, SKILLS } from "../../../routes/routeAddress";

const Steps = () => {
    const jobInfo = useSelector(selectJob);
  return (
    <Resume displayBtn = {false} >
        <ListGroup>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = {BASICINFO}>
                    <Icon.InfoCircleFill className = "me-2" />
                    اطلاعات پایه
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = {EDUCATION}>
                    <Icon.BookFill className = "me-2" />
                     تحصیلات
                </Link>
            </ListGroup.Item>
            {jobInfo.jobExperience &&
                <ListGroup.Item className = "border border-0 p-2 m-2">
                    <Link className = "nav-link text-muted fs-5" to = {JOBEXPERIENCE}>
                        <Icon.BriefcaseFill className = "me-2" />
                        سوابق شغلی  
                    </Link>
                </ListGroup.Item>
            }
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = {SKILLS}>
                    <Icon.Wrench className = "me-2" />
                    مهارت ها    
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = {ADDITIONALINFO}>
                    <Icon.PlusCircle className = "me-2" />
                     اطلاعات تکمیلی
                </Link>  
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = {GENERATEPDF} >
                    <Icon.FilePdf className = "me-2" />
                    دانلود رزومه
                </Link>  
            </ListGroup.Item>
        </ListGroup>
    </Resume>
  )
}

export default Steps;