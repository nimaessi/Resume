import { Link } from "react-router-dom";
import Resume from "../Resume";
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectJob } from "../../../features/job-experience/jobSlice";

const Steps = () => {
    const jobInfo = useSelector(selectJob);
  return (
    <Resume displayBtn = {false} >
        <ListGroup>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/basic-info">
                    <Icon.InfoCircleFill className = "me-2" />
                    اطلاعات پایه
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/education">
                    <Icon.BookFill className = "me-2" />
                     تحصیلات
                </Link>
            </ListGroup.Item>
            {jobInfo.jobExperience &&
                <ListGroup.Item className = "border border-0 p-2 m-2">
                    <Link className = "nav-link text-muted fs-5" to = "/resume/job-experience">
                        <Icon.BriefcaseFill className = "me-2" />
                        سوابق شغلی  
                    </Link>
                </ListGroup.Item>
            }
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/skills">
                    <Icon.Wrench className = "me-2" />
                    مهارت ها    
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/additional-information">
                    <Icon.PlusCircle className = "me-2" />
                     اطلاعات تکمیلی
                </Link>  
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/generatepdf" >
                    <Icon.FilePdf className = "me-2" />
                     دانلود رزومه
                </Link>  
            </ListGroup.Item>
        </ListGroup>
    </Resume>
  )
}

export default Steps;