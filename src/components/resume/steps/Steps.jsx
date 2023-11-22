import { Link } from "react-router-dom";
import Resume from "../Resume";
import ListGroup from 'react-bootstrap/ListGroup';

const Steps = () => {
  return (
    <Resume displayBtn = {false} >
        <ListGroup>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link" to = "/resume/basic-info">اطلاعات پایه</Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link" to = "/resume/basic-info"> تحصیلات</Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link" to = "/resume/basic-info"> سوابق شغلی</Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link" to = "/resume/basic-info">مهارت ها</Link>
            </ListGroup.Item>
            <ListGroup.Item className = "border border-0 p-2 m-2">
                <Link className = "nav-link" to = "/resume/basic-info"> اطلاعات تکمیلی</Link>  
            </ListGroup.Item>
        </ListGroup>
    </Resume>
  )
}

export default Steps;