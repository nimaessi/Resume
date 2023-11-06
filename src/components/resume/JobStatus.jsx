import { Col, Container, Form, Row } from "react-bootstrap";
const radios = [
    { label: 'شاغل', value: 'employed' },
    { label: 'در حال حاضر شاغل نیستم', value: 'unemployed' },
    { label: 'شاغل و جویای فرصت بهتر', value: 'employedSeeking' },
  ];

const JobStatus = () => {
  return (
    <Container className = "bgColorWhite">
        <Row>
            <Col md = {4}></Col>
            <Col md = {4}>
                <Form className = "mt-4">
                    {
                        radios.map((radio) => {
                            return(
                                <Form.Check
                                    className = "text-muted mb-2"
                                    key = {radio.value}
                                    type = 'radio'
                                    name = "employeStatus"
                                    value = {radio.value}
                                    onChange = {(e) => console.log({[e.target.name]:e.target.value})}
                                    label = {radio.label}/>
                            )
                        })
                    }
                    
                </Form>
            </Col>
            <Col md = {4}></Col>
        </Row>
    </Container>
  )
}

export default JobStatus;