import "../../assets/styles/AcercaDe.css";
import Acercade from "../../assets/img/Acercade.png";
import { FaUsers } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdPayment } from "react-icons/md";

function AcercaDe() {
  return (
    <div className="rectangulo">

      <div className="textoimagen">
        <div className="container-text-center">
          <div className="zumzum">
            <div className="row">
              <div className="col">
                <div className="text-content">
                  <div className="texto">
                    <h2 className="txt-acerca">acerca de</h2>
                    <p className="txt-descripcionacerca">
                      Nuestro trabajo es llevado para cada uno de nuestros
                      clientes que disfruten de poot's con la mejor comida
                      tradicional mexicana de cada unos de los estados de la
                      república...
                    </p>
                  </div>

                  <div className="conocermas">
                    <div className="conocermas1">
                      <button type="button" className="btn">
                        conocer más
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="image-content">
                      <img src={Acercade} className="FotoAcercaDe" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="zum">
          <div className="row">
            <div className="col">
              <div className="card-body">
                <div className="car1">
                  <div className="iperson">
                    <FaUsers />
                  </div>
                  <h5 className="card-title">personal capacitado.</h5>
                  <p className="card-text">
                    Cada uno de nuestros trabajadores tiene la dedicación,
                    entrega y compromiso para que nuestros clientes disfruten de
                    la mejor comida.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <div className="car2">
                  <div className="ifood">
                    <MdFoodBank />
                  </div>
                  <h5 className="card-title">comida de calidad.</h5>
                  <p className="card-text">
                    La comida es elaborada con el fin de otorgar a nuestros
                    clientes la mejor comida de cada estado del país.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <div className="car3">
                  <div className="ipay">
                    <MdPayment />
                  </div>
                  <h5 className="card-title">métodos de pago.</h5>
                  <p className="card-text">
                    Contamos con diversos métodos de pago para tener la mayor
                    facilidad y comodidad para nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AcercaDe;
