import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import styles from './layout.module.css';
import { PATH, SIGNUP } from '../../routes/routeAddress'; 
const Layout = () => {

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar className = {styles.primaryColor}>
          <Container fluid>
              <Navbar.Brand className = 'text-light'>رزومه ساز</Navbar.Brand>
              <Nav>
                {(location.pathname != PATH && location.pathname != SIGNUP) &&
                  <Nav.Link as = {Link} to = {PATH}><Icon.BoxArrowLeft className = 'text-light fs-4' /></Nav.Link>
                }
              </Nav>
          </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Layout