import { Alert, Spinner } from 'react-bootstrap';

const Waiting = () => {
  return (
    <Alert variant = "success w-50 text-center mx-auto" >
      لطفا صبر کنید ...
      <Spinner className = "ms-2" animation="grow" variant="warning" size = "sm"/>
      <Spinner className = "ms-2" animation="grow" variant="success" size = "sm" />
      <Spinner className = "ms-2" animation="grow" variant="danger" size = "sm" />
    </Alert> 
  )
}

export default Waiting