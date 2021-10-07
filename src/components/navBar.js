import Logo from '../Images/flopkart1.png'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
const NavBar = () => {
    return ( 
<Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#8B2D2D"}}>
  <Container>
  <Navbar.Brand href="#home">
  <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
    />FLOPKART</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Cart">Cart</Nav.Link>
    </Nav>
    <Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-1"
        aria-label="Search"
      />
      <Button variant="secondary" size="sm" >Search</Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     );
}
 
export default NavBar;