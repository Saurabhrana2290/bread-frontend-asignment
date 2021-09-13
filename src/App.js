import './App.css';
import {Container,Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function App() {
  return (
    <div className="App">

<Navbar collapseOnSelect>
  <Container>
  <Navbar.Brand href="#home">bre.ad/jane</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Container>
  <Container className="right">
  <Navbar.Collapse id="responsive-navbar-nav">  
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
      <Nav.Item>
          <Button bsStyle="secondary">Book Trial</Button>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      <div className="navigationBar">
      <Breadcrumb>
          <Breadcrumb.Item href="#">bre.ad/jane</Breadcrumb.Item>
        </Breadcrumb>
      <Nav className="justify-content-end" defaultActiveKey="/home" pullRight>
        
        <Nav.Item>
          <Nav.Link href="/home">bre.ad/jane</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1">Offerings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Testimonials</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Contact Me</Nav.Link>
        </Nav.Item>
        
      </Nav>
      </div>
      
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
