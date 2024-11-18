import React from "react";
import { useNavigate } from "react-router-dom";
import carrinho from "../../assets/carrinho.png";
import Logo from "../Logo/App";
import "./style.css";

export default function Busca() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/carrinho");
  };

  return (
    <div className="busca-margin">
      <div className="busca-bar">
        <Logo />
        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="busca-search-bar"
        />

        {/* Botões de Cadastro e Entrar */}
        <div className="busca-auth-links">
          <a href="/cadastro" className="busca-cadastro">
            Cadastre-se
          </a>
          <a href="/acessarconta" className="busca-button-primary">
            Entrar
          </a>
        </div>

        <img
          src={carrinho}
          alt="Carrinho de Compras"
          className="busca-cart-icon"
          onClick={handleCartClick}
        />
      </div>
    </div>
  );
}