import FormaAlerta from "../../assets/img/forma1.png";

import { GiCancel } from "react-icons/gi";

import "../../assets/styles/AlertError.css";

function AlertError() {
  return (
    <div class="error">
      <div class="error__icon">
        <img src={FormaAlerta} className="FormaDeAlerta" />
      </div>
      <div class="error__title">error al registrarse</div>
      <div class="error__close">
        <GiCancel />
      </div>
    </div>
  );
}
export default AlertError;
