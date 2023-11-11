import { Button, Container } from "react-bootstrap"

const NextStep = () => {
  return (
    <Container className = "mt-4 bgColorWhite p-3 d-flex justify-content-end">
        <Button className = "me-3" variant = "outline-info">بازگشت</Button>
        <Button variant = "success"> ذخیره و ادامه </Button>
    </Container>
  )
}

export default NextStep;