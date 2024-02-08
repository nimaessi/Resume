import { Col, Image, Row } from 'react-bootstrap';
import avatar from "../../../assets/images/avatar.jpg";
import { useSelector } from 'react-redux';
import { selectInformation } from '../../../features/information/informationSlice';

const TopPDF = () => {
  const info = useSelector(selectInformation);
  return (
    <Row>
        <Col md = {3}>
            <Image src = {avatar} roundedCircle />
        </Col>
        <Col md = {9} className = "d-flex align-items-center">
            <h3 className = "text-muted">{info.firstName}{info.lastName}</h3>
        </Col>
    </Row>
  )
}

export default TopPDF;