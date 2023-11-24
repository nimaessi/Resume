import { Link } from "react-router-dom";
import Resume from "../Resume";
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from "react-bootstrap-icons";

const Steps = () => {
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
                <Link className = "nav-link text-muted fs-5" to = "/resume/basic-info">
                    <Icon.BookFill className = "me-2" />
                     تحصیلات
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/basic-info">
                    <Icon.BriefcaseFill className = "me-2" />
                    سوابق شغلی  
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/basic-info">
                    <Icon.Wrench className = "me-2" />
                    مهارت ها    
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link text-muted fs-5" to = "/resume/basic-info">
                    <Icon.PlusCircle className = "me-2" />
                     اطلاعات تکمیلی
                </Link>  
            </ListGroup.Item>
        </ListGroup>
    </Resume>
  )
}

export default Steps;