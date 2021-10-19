import './NavBar.css';
import logo from '../imgCom/newAnima.png';
import Canasta from '../CartWidget.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {

    // const {user, logout} =  useContext(UserContext)


    return (
    <div className="menu1" >
  <Navbar bg="success" expand="lg">
  <Container>
    <Navbar.Brand >
    <Link to="/" >
    <img src={logo} className="logo" alt="logo" width= "100" />
   </Link> 
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" >
      <Nav className="justify-content-end">
        <Nav.Link>
        <Link to="/"> Inicio </Link>
        </Nav.Link>
        <Nav.Link>
        <Link to="/Programs"> Programas </Link> 
          </Nav.Link>
          <Nav.Link>
          <Link to="/Contacto"> Contacto </Link>  
          </Nav.Link>
          <Nav.Link>
          <div className="iconoCanasta">
          <Canasta/>   
          </div> 
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
</div>
    //  <div className="menu">
    //  <div className="logoBrand">
        
    //  <Link to="/" >
    //  <img src={logo} className="logo" alt="logo" width= "100" />
    // </Link>  
    //  </div>
    
    //  <nav>
    //  <Link to="/"> Inicio </Link>    
    //  <Link to="/Programs"> Programas </Link>  
    //  <Link to="/Contacto"> Contacto </Link> 
    //  <div className="iconoCanasta">
    //  <Canasta/>   
    //  </div>
    //  </nav>
    //  </div>
    
    );
}

export default NavBar