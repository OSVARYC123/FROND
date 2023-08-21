import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/img/Logo.png";
import "../../assets/styles/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo-poots" />
        </Navbar.Brand>
        <div className="d-flex flex-row-reverse">
          <div className="p-2 txtHeader">contacto</div>
          <div className="p-2 txtHeader">menú</div>
          <div className="p-2 txtHeader">acerca de</div>
          <div className="p-2 txtHeader">inicio</div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
