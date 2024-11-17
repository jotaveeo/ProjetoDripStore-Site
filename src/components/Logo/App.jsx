import { Link } from "react-router-dom"; // Importa o Link do React Router
import logoHeader from "../../assets/svgs/logo-header.svg";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo-container">
      {/* Link envolvem a logo para redirecionar à página inicial */}
      <Link to="/" className="logo-link">
        <img className="logo-header" src={logoHeader} alt="logo-header" />
      </Link>
    </div>
  );
}
