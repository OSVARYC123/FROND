import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import SalaPrivada from "../../assets/img/SalaPrivada.JPG";
import Terraza from "../../assets/img/Terraza.JPG";
import SalaDeEstar from "../../assets/img/SalaDeEstar.JPG";
import AreaDeJuegos from "../../assets/img/AreaDeJuegos.JPG";
import Baños from "../../assets/img/Baños.JPG";
import TransporteSeguro from "../../assets/img/TransporteSeguro.JPG";
import ReconocimientoFacial from "../../assets/img/ReconocimientoFacial.JPG";

import "../../assets/styles/Visitanos.css";

function Visitanos() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    SalaPrivada,
    Terraza,
    SalaDeEstar,
    AreaDeJuegos,
    Baños,
    TransporteSeguro,
    ReconocimientoFacial,
  ];

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getListItemStyles = (index) => {
    const isActive =
      selectedImageIndex === index ||
      (hoveredIndex === index && selectedImageIndex !== index);

    return {
      cursor: "pointer",
      color: isActive ? "#C11B5C" : "#25365C",
      fontSize: isActive ? "34px" : "30px",
      margin: isActive ? "60px" : "60px",
      top: isActive ? "-40px" : "-40px"
    };
  };

  const customNames = [
    "sala privada",
    "terraza",
    "sala de estar",
    "área de juegos",
    "baños",
    "transportes seguros",
    "reconocimiento facial"
  ];

  return (
    <Container fluid className="container-visitanos mt-5">
      <Row className="centrado-visitanos">
        <Col md={4} className="position-relative">
          <div className="d-flex flex-column h-100 ">
            <ul>
              {images.map((_, index) => (
                <li
                  key={index}
                  className={`letras-secciones list-group-item txt-letras-m ${
                    selectedImageIndex === index ? "active" : ""
                  } bg-transparent border-0 p-0`}
                  onClick={() => handleImageChange(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={getListItemStyles(index)}
                >
                  {customNames[index]}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={7}>
          <div className="text-center">
            <Image
              src={images[selectedImageIndex]}
              alt={`Imagen ${selectedImageIndex + 1}`}
              className="imagen-ubicacion"
              fluid
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Visitanos;