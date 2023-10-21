
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <div>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%2033.png?alt=media&token=d46aef7b-d8a5-416e-81c2-eebdcd358daf&_gl=1*11ijrzr*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5Nzc3MTczOS4xMS4xLjE2OTc3NzMxODIuNTMuMC4w" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
          </Nav>
       
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
<div className='bigHero' >
  <h1>Disfruta el mejor catalogo, <br />para compartir o ver solo tu !</h1>

</div>
    </div>
  );
}

export default NavBar;