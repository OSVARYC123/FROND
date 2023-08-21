import LogoPoots from "../../assets/img/logo.png";
import "../../assets/styles/Header2.css";

function Header2() {
  return (
    <nav className="navbar navbarHeader">
      <div className="logo">
        <img src={LogoPoots} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#inicio"
            className=" botonHeader"
          >
            inicio
          </a>
        </li>
        <li>
          <a
            href="#acercade"
            className=" botonHeader"
          >
            acerca de
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className=" botonHeader"
          >
            menú
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className=" botonHeader"
          >
            contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header2;
