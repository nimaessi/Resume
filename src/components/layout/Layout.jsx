import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <>
      <Navbar className = {styles.primaryColor}>
          <Container fluid>
              <Navbar.Brand className = 'text-light'>رزومه ساز</Navbar.Brand>
              <Nav>
                <Nav.Link><Icon.BoxArrowLeft className = 'text-light fs-4' /></Nav.Link>
              </Nav>
          </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Layout