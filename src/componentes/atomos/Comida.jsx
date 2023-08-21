import ImagenComidaReginal from "../../assets/img/ComidaRegional.jpg";
import "../../assets/styles/Comida.css";

function Comida() {
  return (
    <div className="text-image-container">
      <div className="text-content">
        <h2 className="txt-ComidaMexicana">comida regional mexicana</h2>
        <p className="txt-descripcionComidaMexicana">
          las mejores comidas de buffet mexicano, <br /> comidas tradicionales
          de toda la republica <br />
          mexicana para el buen gusto de nuestros <br /> clientes la mejor
          comida a la disposición de <br />
          todos!
        </p>
      </div>
      <div className="image-content-comida">
        <img src={ImagenComidaReginal} />
      </div>
    </div>
  );
}
export default Comida;
