import { BiLogoInstagramAlt } from "react-icons/bi";
import { PiTiktokLogoFill } from "react-icons/pi";

import { RiWhatsappFill } from "react-icons/ri";

import "../../assets/styles/RedesSociales.css";

function RedesSociales() {
  return (
    <button class="btn-cssbuttons">
      <span>Redes Sociales</span>
      <span>
        <svg
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
          class="icon"
        >
          <path
            fill="#ffffff"
            d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
          ></path>
        </svg>
      </span>
      <ul>
        <li>
          <a href="https://www.tiktok.com/explore">
            <PiTiktokLogoFill className="colorRedes" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <BiLogoInstagramAlt className="colorRedes" />
          </a>
        </li>
        <li>
          <a href="https://web.whatsapp.com/">
            <RiWhatsappFill className="colorRedes" />
          </a>
        </li>
      </ul>

    </button>
  );
}
export default RedesSociales;
