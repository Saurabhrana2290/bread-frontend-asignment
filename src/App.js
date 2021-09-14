import './App.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        
        <Navbar collapseOnSelect bg="myViolet" variant="light">

          <Navbar.Brand href="#home">bre.ad/jane</Navbar.Brand>
          <Navbar.Toggle id="responsive-navbar" aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
              <Nav.Item>
                <Button bsStyle="secondary">Book Trial</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Container>



      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
