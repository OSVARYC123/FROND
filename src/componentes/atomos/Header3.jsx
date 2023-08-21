import { Link } from "react-router-dom";

import LogoRestaPoots from "../../assets/img/logo.png";

import "../../assets/styles/Header3.css";

function Header3() {
  const handleShow = () => setShow(true);

  return (
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
      <div class="container-fluid">
        <div className="logo">
          <img src={LogoRestaPoots} alt="logo" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                inicio
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#conocenos">
                acerca de
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#footer">
                menú
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " onClick={handleShow}>
                contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header3;