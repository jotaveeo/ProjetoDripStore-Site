import footerLogo from "../../assets/svgs/logo.svg";
import facebookLogo from "../../assets/svgs/facebook.svg";
import instagramLogo from "../../assets/svgs/instagram.svg";
import twitterLogo from "../../assets/svgs/twitter.svg";

import "./style.css";

export default function Footer() {
  return (
    <footer>
      <footer className="footer">
        <div className="footer-logo">
          <h2>
            <img src={footerLogo} alt="Logo Digital Store" />
          </h2>
          <p></p>
          <div className="redesLogo">
            <img src={facebookLogo} alt="Logo Facebook" />
            <img src={instagramLogo} alt="Logo Instagram" />
            <img src={twitterLogo} alt="Logo Twitter" />
          </div>
        </div>

        <div className="footer-links">
          <h3>Informação</h3>
          <ul>
            <li>
              <a href="#">Sobre Drip Store</a>
            </li>
            <li>
              <a href="#">Trabalhe conosco</a>
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Categorias</h3>
          <ul>
            <li>
              <a href="#">Camisetas</a>
            </li>
            <li>
              <a href="#">Calças</a>
            </li>
            <li>
              <a href="#">Bonés</a>
            </li>
            <li>
              <a href="#">Headphones</a>
            </li>
            <li>
              <a href="#">Tênis</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </footer>
      <div className="digcoll">
        <hr />
        <p>@ 2022 Digital College</p>
      </div>
    </footer>
  );
}
