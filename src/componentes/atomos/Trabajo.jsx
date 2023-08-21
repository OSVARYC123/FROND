import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImagenNuestroTrabajo from "../../assets/img/NuestroTrabajo.png";
import "../../assets/styles/Trabajo.css";

function Trabajo() {
  return (
    <div className="fondoTrabajo">
      <Container>
        <Row className="txt-trabajos">
          <Col xs={12} md={6}>
            <img src={ImagenNuestroTrabajo} className="fotoTrabajo"/>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="txt-NuestroTrabajo-titulo">nuestro trabajo</h2>
            <p className="txt-NuestroTrabajo-Descripcion">
              La mejor atención para nuestros clientes y la mayor
              disposición para que nuestros clientes queden
              satisfechos.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Trabajo;
