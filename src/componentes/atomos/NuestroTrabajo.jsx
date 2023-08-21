import ImagenNuestroTrabajo from "../../assets/img/NuestroTrabajo.png";
import "../../assets/styles/NuestroTrabajo.css";

function NuestroTrabajo() {
  return (
    <div className="text-image-container-nt2">
      <div className="image-content-nt2">
        <img src={ImagenNuestroTrabajo} className="foto-trabajo"/>
      </div>
      <div className="text-content-nt2">
        <h2 className="txt-nt">nuestro trabajo</h2>
        <p className="txt-descripcion2">
          La mejor atención para nuestros clientes y la mayor disposición para
          que nuestros clientes queden satisfechos.
        </p>
      </div>
    </div>
  );
}
export default NuestroTrabajo;
