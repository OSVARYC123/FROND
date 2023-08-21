import Plato1 from "../../assets/img/plato1.png";
import Plato2 from "../../assets/img/plato2.png";
import Plato3 from "../../assets/img/plato3.png";
import "../../assets/styles/Platillos.css";

function Platillos() {
  return (
    <div id="menu" className="containerPlatillos">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-md-4">
            <div className="Pla1">
              <img src={Plato1} className="fotoPlatillos" />
              <h2 className="txt-nombrePlatillo">Pollo asado con verduras</h2>
              <p className="text-break">
                Las comidas mejores preparadas y con el mejor sazón de nuestros
                chefs para nuestros clientes
              </p>
            </div>
          </div>

          <div className="col-md-4 xs-8">
            <div className="">
              <img src={Plato2} className="fotoPlatillos" />
              <h2 className="txt-nombrePlatillo">
                Filete de pollo con ensalada
              </h2>
              <p className="text-break">
                Platillo elaborado bajo en grasas por los mejores chefs.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="">
              <img src={Plato3} className="fotoPlatillos3" />
              <h2 className="txt-nombrePlatillo">
                Pollo a la plancha con ensalada
              </h2>
              <p className="text-break">
                Comida preparada para cuidar la alimentacion bajo de grasas.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-masPlatillos">mostrar
        más platillos</button>
      </div>
    </div>
  );
}

export default Platillos;
