import { Card, Container} from "react-bootstrap";

const CardContainer = ({title = " ", children }) => {
  return (
      <Container fluid className = "d-flex align-items-center justify-content-center vh-100 overflow-hidden">
      <Card bg = "light" style={{ width: '30rem' }}>
        <Card.Header className = "text-center">رزومه ساز</Card.Header>
        <Card.Body>
          <Card.Title className = "fs-16"> { title } </Card.Title>
          { children }
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CardContainer